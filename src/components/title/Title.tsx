import React, {ChangeEvent} from 'react';
import style from "./Title.module.scss"

type TitlePropsType = {
    title: string
    setTitle: (title: string) => void
}

const Title: React.VFC<TitlePropsType> = ({title, setTitle}) => {

    const onChangHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <label className={style.input}>
            <input type="text"
                   className={style.input__field}
                   value={title}
                   onChange={onChangHandler}
                   placeholder=" "
            />
            <span className={style.input__label}>Title</span>
        </label>
    );
};

export default Title;