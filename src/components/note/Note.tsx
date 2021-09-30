import React from 'react';
import {NotesType} from "../../App";
import Button from "../button/Button";
import EditableTitle from "../editableTitle/EditableTitle";
import EditableText from "../editableText/EditableText";
import style from "./Note.module.scss"

type NotePropsType = {
    notes: Array<NotesType>
    removeNote: (id: string) => void
    changeNoteTitle: (id: string, newTitle: string) => void
    changeNoteText: (id: string, newText: string) => void
    filter: string
}

const Note: React.VFC<NotePropsType> = (
    {notes, removeNote, changeNoteTitle, changeNoteText, filter}
) => {
    const notesFiltered = notes.filter(n => n.text.includes(filter.trim()));

    return (
        <div className={style.card}>
            {notesFiltered.map(n => {
                const onChangeTitleHandler = (newValue: string) => {
                    changeNoteTitle(n.id, newValue);
                }
                const onChangeTextHandler = (newValue: string) => {
                    changeNoteText(n.id, newValue);
                }
                return (
                    <div key={n.id} className={style.card__note}>
                        <div>
                            <EditableTitle
                                title={n.title}
                                onChange={onChangeTitleHandler}
                            />
                        </div>
                        <div>
                            <EditableText text={n.text} onChange={onChangeTextHandler}/>
                        </div>
                        <Button onClick={() => removeNote(n.id)}>x</Button>
                    </div>
                )
            })}
        </div>
    );
};

export default Note;