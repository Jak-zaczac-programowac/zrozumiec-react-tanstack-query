import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./Form.css";

export function Form() {
    const [isFormShown, setIsFormShown] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: (data) =>
            fetch("http://localhost:3000/people", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error("Błąd zapisu");
            }),
        onSuccess: (res) => {
            const peopleData = queryClient.getQueryData(["people"]);
            queryClient.setQueryData(["people"], [...peopleData, res]);
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ name, email, age });
        mutate(
            { name, email, age },
            {
                onError: (error) => alert(error),
                onSettled: () => {
                    setIsFormShown(false);

                    setName("");
                    setEmail("");
                    setAge("");
                },
            }
        );
    };

    if (isPending) {
        return <p>Zapisywanie...</p>;
    }

    return (
        <div>
            {isFormShown ? (
                <form onSubmit={handleSubmit} autoComplete="false">
                    <div>
                        <input
                            type="text"
                            placeholder="Imię"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="Wiek"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <button type="submit">Dodaj</button>
                </form>
            ) : (
                <button onClick={() => setIsFormShown(true)}>Dodaj</button>
            )}
        </div>
    );
}
