import React, { useState } from "react";
import Button1 from "./Button1";

const Basic = () => {
    const [count, setCount] = useState(0);
    const clickHandler = () => {
        setCount((prevstate) => prevstate + 1)
    }
    return <>
        <Button1 onClick={clickHandler} count={count} />
        <Button1 onClick={clickHandler} count={count} />
    </>;
};

export default Basic;
