import React from "react";
import NoteCard from "./components/NoteCard/NoteCard";

function App() {

    const notesData = [
        {
            body: "Hello, World!",
            data: '14.05.22',
        },
        {
            body: "Hello, World!",
            data: '13.02.26',
        },
        {
            body: "Hello, World!",
            data: '01.12.24',
        }
    ]

    const [notes, setNotes] = React.useState([]);

    return (
        <div className="App">
            <h1 className='title'>My notes</h1>
            <div className='note-card-wrapper'>
                {
                    notesData.map((note) => (<NoteCard key={Math.random()} note={note} />))
                }
            </div>
        </div>
    );
}

export default App;