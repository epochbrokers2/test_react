import React from "react";

const Button1 = ({ count, onClick }) => {
    return <button onClick={onClick}> Button Clicked {count} times</button>;
};

export default Button1;
