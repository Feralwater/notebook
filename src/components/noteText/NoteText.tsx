import React, {ChangeEvent} from 'react';
import style from "../title/Title.module.scss"
import s from "./NoteText.module.scss"

type NoteTextPropsType = {
    text: string
    setText: (text: string) => void
    error: boolean
}

const NoteText: React.VFC<NoteTextPropsType> = ({text, setText, error}) => {

    const onChangHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }
    return (
        <label className={style.input}>
            <textarea value={text}
                      className={error ? style.input__field + " " + s.input__field + " " + style.error : style.input__field + " " + s.input__field}
                      onChange={onChangHandler}
                      placeholder=" "
            />
            <span className={style.input__label}>Enter your text</span>
        </label>
    );
};

export default NoteText;