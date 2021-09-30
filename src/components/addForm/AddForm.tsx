import React, {MouseEvent, useState} from 'react';
import Title from "../title/Title";
import NoteText from "../noteText/NoteText";
import Button from "../button/Button";
import {v1} from "uuid";
import style from "./AddForm.module.scss"

type AddFormPropsType = {
    addNote: (title: string, text: string) => void
    changeFilter: (e: MouseEvent<HTMLSpanElement>) => void
}

const AddForm: React.VFC<AddFormPropsType> = ({addNote, changeFilter}) => {
    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [tags, setTags] = useState<Set<string>>(new Set());

    function addTag(text: string) {
        const noteTags = text.match(/#\S*/ig)
        noteTags && noteTags.map(el => tags.add(el)) && setTags(tags);
    }

    const getOnClick = () => {
        const newTitle = title.trim();
        const newText = text.trim();
        if (newTitle !== "" && newText !== "") {
            addNote(title, text);
            setTitle("");
            setText("");
            addTag(text);
            setError(false);
        } else {
            setError(true);
        }
    }
    const reset = () => {
        setTitle("");
        setText("");
    }

    return (
        <>
            <div className={style.container}>
                <Title title={title}
                       setTitle={setTitle}
                       error={error}
                />
                <NoteText text={text}
                          setText={setText}
                          error={error}
                />
                <Button onClick={getOnClick}
                >Add</Button>
                <Button onClick={reset}
                >Reset</Button>
            </div>
            <div>{Array.from(tags).map(t =>
                <span key={v1()}
                      onClick={changeFilter}
                >{t} </span>)}
            </div>
        </>
    );
};

export default AddForm;