import { recipes } from "./data";
import Recipe from "./Recipe";

const Extra = () => {
    const listItem = recipes.map(item => (
        <Recipe key={item.id} item={item} />
    ))
    return (
        <article>
            <h1>Reciepeies</h1>
            {listItem}
        </article>
    );
};

export default Extra;
