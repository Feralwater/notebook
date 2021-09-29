import React, {KeyboardEvent, useState} from 'react';

type EditableTitlePropsType = {
    text: string
    onChange: (value: string) => void
}

const EditableText: React.VFC<EditableTitlePropsType> = ({text, onChange}) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [noteText, setNoteText] = useState<string>('');
    const activateEditMode = () => {
        setEditMode(true);
        setNoteText(text);
    }
    const disActivateEditMode = () => {
        setEditMode(false);
        onChange(noteText);
    }
    const onKeyPressHandler = ({charCode}: KeyboardEvent<HTMLTextAreaElement>) => {
        if (charCode === 13) {
            setEditMode(false);
            onChange(noteText);
        }
    }
    return editMode
        ? <textarea value={noteText}
                    onBlur={disActivateEditMode}
                    autoFocus
                    onChange={(e) => setNoteText(e.currentTarget.value)}
                    onKeyPress={onKeyPressHandler}
        />
        : <span onDoubleClick={activateEditMode}>{text}</span>
}
export default EditableText;