import "./List.css";
import { useQuery } from "@tanstack/react-query";
import { peopleQueryOptions } from "../queries/peopleQueryOptions";

export const List = ({ onSelectPerson }) => {
    const { data: people, isPending, isError } = useQuery(peopleQueryOptions);

    if (isPending) {
        return <p>Ładowanie...</p>;
    }

    if (isError) {
        return <p>Błąd pobierania</p>;
    }

    return (
        <ul>
            {people?.map((person) => (
                <li key={person.id} onClick={() => onSelectPerson(person.id)}>
                    {person.name}
                </li>
            ))}
        </ul>
    );
};
