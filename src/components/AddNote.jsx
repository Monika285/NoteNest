import { useState, useContext } from "react";
import { NotesContext } from "../context/NotesContext";

const AddNote = () => {
    const { addNote } = useContext(NotesContext);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title && !content) return;

        addNote({ id: Date.now(), title, content, pinned: false });
        setTitle("");
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className="add-note-form">
            <input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea 
                placeholder="Take a note..." 
                value={content} 
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddNote;
