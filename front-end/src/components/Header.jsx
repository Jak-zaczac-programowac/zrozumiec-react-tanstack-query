import { useQuery } from "@tanstack/react-query";
import "./Header.css";
import { peopleQueryOptions } from "../queries/peopleQueryOptions";

export function Header() {
    const { data: people } = useQuery(peopleQueryOptions);

    return (
        <header>
            <h1>Lista osób {people && `${people.length}`}</h1>
        </header>
    );
}
