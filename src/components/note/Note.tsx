import React from 'react';
import {NotesType} from "../../App";

type NotePropsType = {
    notes: Array<NotesType>
}

const Note: React.VFC<NotePropsType> = ({notes}) => {
    return (
        <div>
            {notes.map(n => (
                <div key={n.id}>
                    <h3>{n.title}</h3>
                    <div>{n.text}</div>
                </div>
            ))}
        </div>
    );
};

export default Note;