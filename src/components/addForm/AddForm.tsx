import React, {useState} from 'react';
import Title from "../title/Title";
import NoteText from "../noteText/NoteText";
import Button from "../button/Button";

type AddFormPropsType = {
    addNote: (title: string, text: string) => void
}

const AddForm: React.VFC<AddFormPropsType> = ({addNote}) => {
    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [tags, setTags] = useState<Set<string>>(new Set());

    function addTag(text: string) {
        const noteTags = text.match(/#\S*/ig)
        noteTags && noteTags.map(el => tags.add(el)) && setTags(tags);
    }

    return (
        <>
            <Title title={title}
                   setTitle={setTitle}
            />
            <NoteText text={text}
                      setText={setText}
            />
            <Button onClick={() => {
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
            }}
            >Add</Button>
            {error && <div>{error}</div>}
            <div>{Array.from(tags).map(t => <span>{t} </span>)}</div>
        </>
    );
};

export default AddForm;