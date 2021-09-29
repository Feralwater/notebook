import React, {ChangeEvent} from 'react';

type TitlePropsType = {
    title: string
    setTitle: (title: string) => void
}

const Title: React.VFC<TitlePropsType> = ({title, setTitle}) => {

    const onChangHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <input type="text"
               value={title}
               onChange={onChangHandler}
               placeholder={"Enter title"}
        />
    );
};

export default Title;