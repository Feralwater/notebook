import React, {ChangeEvent} from 'react';
import style from "./Title.module.scss"

type TitlePropsType = {
    title: string
    setTitle: (title: string) => void
    error: boolean
}

const Title: React.VFC<TitlePropsType> = ({title, setTitle, error}) => {

    const onChangHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <label className={style.input}>
            <input type="text"
                   className={error ? style.error + " " + style.input__field : style.input__field}
                   value={title}
                   onChange={onChangHandler}
                   placeholder=" "
            />
            <span className={style.input__label}>Title</span>
        </label>
    );
};

export default Title;