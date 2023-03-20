import { people } from "./data";
import { getImageUrl } from "./utils";

const Extra = () => {
    let chemist = people.filter(person => person.profession === "chemist")
    const listItems = people.map((person) => (
        <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
                <b>{person.name}:</b>
                {" " + person.profession + " "}
                known for {person.accomplishment}
            </p>
        </li>
    ));
    const chemistListItems = chemist.map((person) => (
        <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
                <b>{person.name}:</b>
                {" " + person.profession + " "}
                known for {person.accomplishment}
            </p>
        </li>
    ));
    return (
        <article>
            <h1>Scientists</h1>
            <h2>All List</h2>
            <ul>{listItems}</ul>
            <h2>Chemist List</h2>
            <ul>{chemistListItems}</ul>
        </article>
    );
};

export default Extra;
