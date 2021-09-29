import React, {useState} from 'react';
import Title from "../title/Title";
import NoteText from "../noteText/NoteText";
import Button from "../button/Button";

const AddForm: React.VFC = () => {
    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");
    return (
        <>
            <Title title={title}
                   setTitle={setTitle}
            />
            <NoteText text={text}
                      setText={setText}
            />
            <Button>Add</Button>
        </>
    );
};

export default AddForm;