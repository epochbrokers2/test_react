import React from "react";

const Recipe = ({ item }) => {
    return (
        <div>
            <h2>{item.name}</h2>
            <ul>
                {item.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recipe;
