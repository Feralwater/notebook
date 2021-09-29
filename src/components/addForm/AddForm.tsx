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
                    setError(null);
                } else {
                    setError("Fill all fields");
                }
            }}
            >Add</Button>
            {error && <div>{error}</div>}
        </>
    );
};

export default AddForm;