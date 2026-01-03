import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import { NotesProvider } from "./context/NotesContext";
import "./styles.css";

function App() {
    return (
        <NotesProvider>
            <div className="app">
                <h1>PinPoint 📝</h1>
                <AddNote />
                <NoteList />
            </div>
        </NotesProvider>
    );
}

export default App;
