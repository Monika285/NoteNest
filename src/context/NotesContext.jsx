import { createContext, useState, useEffect } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState(() => {
        return JSON.parse(localStorage.getItem("notes")) || [];
    });

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const addNote = (note) => setNotes([note, ...notes]);
    const deleteNote = (id) => setNotes(notes.filter(n => n.id !== id));
    const togglePin = (id) => setNotes(
        notes.map(n => n.id === id ? { ...n, pinned: !n.pinned } : n)
    );

    return (
        <NotesContext.Provider value={{ notes, addNote, deleteNote, togglePin }}>
            {children}
        </NotesContext.Provider>
    );
};
