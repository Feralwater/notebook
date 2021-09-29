import React, {ChangeEvent, useState} from 'react';

type NoteTextPropsType = {
    text: string
    setText: (text: string) => void
}

const NoteText: React.VFC<NoteTextPropsType> = ({text, setText}) => {

    const onChangHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }
    return (
        <div>
            <textarea value={text}
                      onChange={onChangHandler}
                      placeholder={"Enter your note"}
            />
        </div>
    );
};

export default NoteText;