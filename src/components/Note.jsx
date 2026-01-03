import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

const Note = ({ note }) => {
    const { deleteNote, togglePin } = useContext(NotesContext);

    return (
        <div className={`note ${note.pinned ? "pinned" : ""}`}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div className="actions">
                <button onClick={() => togglePin(note.id)}>
                    {note.pinned ? "Unpin" : "Pin"}
                </button>
                <button onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
        </div>
    );
};

export default Note;
