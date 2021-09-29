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
            <Button onClick={() => addNote(title, text)}>Add</Button>
        </>
    );
};

export default AddForm;