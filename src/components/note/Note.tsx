import React from 'react';
import {NotesType} from "../../App";
import Button from "../button/Button";

type NotePropsType = {
    notes: Array<NotesType>
    removeNote: (id: string) => void
}

const Note: React.VFC<NotePropsType> = ({notes, removeNote}) => {
    return (
        <div>
            {notes.map(n => (
                <div key={n.id}>
                    <h3>{n.title}</h3>
                    <div>{n.text}</div>
                    <Button onClick={() => removeNote(n.id)}>x</Button>
                </div>
            ))}
        </div>
    );
};

export default Note;