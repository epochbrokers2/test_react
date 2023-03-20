import { recipes } from "./data";

const Extra = () => {
    const listItem = recipes.map(item => (
        <div index={item.id}>
            <h2>{item.name}</h2>
            <ul>
                {
                    item.ingredients.map(ingredient => (
                        <li key={ingredient}>{ingredient}</li>
                    ))
                }
            </ul>
        </div>
    ))
    return (
        <article>
            <h1>Reciepeies</h1>
            {listItem}
        </article>
    );
};

export default Extra;
