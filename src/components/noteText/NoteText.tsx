import React, {ChangeEvent} from 'react';
import style from "../title/Title.module.scss"
import s from "./NoteText.module.scss"

type NoteTextPropsType = {
    text: string
    setText: (text: string) => void
}

const NoteText: React.VFC<NoteTextPropsType> = ({text, setText}) => {

    const onChangHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }
    return (
        <label className={style.input}>
            <textarea value={text}
                      className={style.input__field + " " + s.input__field}
                      onChange={onChangHandler}
                      placeholder=" "
            />
            <span className={style.input__label}>Enter your text</span>
        </label>
    );
};

export default NoteText;