import { useQuery } from "@tanstack/react-query";
import "./Detail.css";

export function Detail({ onClose, id }) {
    const { data, isPending } = useQuery({
        queryKey: ["person", id],
        queryFn: () =>
            fetch(`http://localhost:3000/people/${id}`).then((res) =>
                res.json()
            ),
        staleTime: 60_000,
    });

    return (
        <div className="detail">
            <button onClick={onClose} type="button">
                X
            </button>
            <h2>Informacje:</h2>
            {isPending ? (
                <p>Ładowanie...</p>
            ) : (
                <>
                    {" "}
                    <h3>{data.name}</h3>
                    <h3>Wiek: {data.age}</h3>
                    <h3>{data.email}</h3>
                </>
            )}
        </div>
    );
}
