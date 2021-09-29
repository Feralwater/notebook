import React, {useState} from 'react';
import Note from "./components/note/Note";
import AddForm from "./components/addForm/AddForm";
import {v1} from 'uuid';

export type NotesType = {
    id: string,
    title: string,
    text: string
}

function App() {
    const [notes, setNotes] = useState<Array<NotesType>>([]);

    function addNote(title: string, text: string) {
        const note: NotesType = {id: v1(), title: title, text: text};
        setNotes([{...note}, ...notes]);
    }

    function removeNote(id: string) {
        setNotes(notes.filter(n => n.id !== id));
    }

    return (<>
            <AddForm addNote={addNote}/>
            <Note notes={notes}
                  removeNote={removeNote}
            />
        </>
    );
}

export default App;
