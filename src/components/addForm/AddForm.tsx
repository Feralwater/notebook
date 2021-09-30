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
    const [error, setError] = useState<string | null>(null);
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
            setError(null);
        } else {
            setError("Fill all fields");
        }
    }
    const reset = () => {
        setTitle("");
        setText("");
    }

    return (
        <form className={style.container}>
            <Title title={title}
                   setTitle={setTitle}
            />
            <NoteText text={text}
                      setText={setText}
            />
            <Button onClick={getOnClick}
            >Add</Button>
            <Button onClick={reset}
            >Reset</Button>
            {error && <div>{error}</div>}
            <div>{Array.from(tags).map(t =>
                <span key={v1()}
                      onClick={changeFilter}
                >{t} </span>)}
            </div>
        </form>
    );
};

export default AddForm;