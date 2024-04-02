import { useState } from "react";
import "./List.css";

export const List = () => {
    const [people, setPeople] = useState([
        { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
        { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
    ]);

    return (
        <ul>
            {people?.map((person) => (
                <li key={person.id}>{person.name}</li>
            ))}
        </ul>
    );
};
