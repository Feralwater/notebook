import React, {KeyboardEvent, useState} from 'react';

type EditableTitlePropsType = {
    title: string
    onChange: (value: string) => void
}

const EditableTitle: React.VFC<EditableTitlePropsType> = ({title, onChange}) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [noteTitle, setNoteTitle] = useState<string>('');
    const activateEditMode = () => {
        setEditMode(true);
        setNoteTitle(title);
    }
    const disActivateEditMode = () => {
        setEditMode(false);
        onChange(noteTitle);
    }
    const onKeyPressHandler = ({charCode}: KeyboardEvent<HTMLInputElement>) => {
        if (charCode === 13) {
            setEditMode(false);
            onChange(noteTitle);
        }
    }
    return editMode
        ? <input value={noteTitle}
                 onBlur={disActivateEditMode}
                 autoFocus
                 onChange={(e) => setNoteTitle(e.currentTarget.value)}
                 onKeyPress={onKeyPressHandler}
        />
        : <span onDoubleClick={activateEditMode}>{title}</span>
}
export default EditableTitle;