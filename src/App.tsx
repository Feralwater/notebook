import React, {MouseEvent, useState} from 'react';
import Note from "./components/note/Note";
import AddForm from "./components/addForm/AddForm";
import {v1} from 'uuid';

export type NotesType = {
    id: string,
    title: string,
    text: string,
}

function App() {
    const [notes, setNotes] = useState<Array<NotesType>>([]);
    const [filter, setFilter] = useState<string>("")

    function addNote(title: string, text: string) {
        const note: NotesType = {id: v1(), title: title, text: text};
        setNotes([{...note}, ...notes]);
    }

    function removeNote(id: string) {
        setNotes(notes.filter(n => n.id !== id));
    }

    function changeNoteTitle(id: string, newTitle: string) {
        const note = notes.find(n => n.id === id);
        if (note) {
            note.title = newTitle;
            setNotes([...notes]);
        }
    }

    function changeNoteText(id: string, newText: string) {
        const note = notes.find(n => n.id === id);
        if (note) {
            note.text = newText;
            setNotes([...notes]);
        }
    }

    function changeFilter(e: MouseEvent<HTMLSpanElement>) {
        setFilter(e.currentTarget.innerText)
    }

    return (<>
            <AddForm addNote={addNote} changeFilter={changeFilter}/>
            <Note notes={notes}
                  removeNote={removeNote}
                  changeNoteTitle={changeNoteTitle}
                  changeNoteText={changeNoteText}
                  filter={filter}
            />
        </>
    );
}

export default App;
