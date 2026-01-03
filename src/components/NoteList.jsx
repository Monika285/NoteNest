import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import Note from "./Note";

const NoteList = () => {
    const { notes } = useContext(NotesContext);
    const [search, setSearch] = useState("");

    const filteredNotes = notes
        .filter(n => n.title.toLowerCase().includes(search.toLowerCase()) 
                  || n.content.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => b.pinned - a.pinned); // Pinned notes first

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search notes..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
            />
            <div className="note-list">
                {filteredNotes.map(note => <Note key={note.id} note={note} />)}
            </div>
        </div>
    );
};

export default NoteList;
