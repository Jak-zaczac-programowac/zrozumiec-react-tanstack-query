import { useState } from "react";
import "./Form.css";

export function Form() {
    const [isFormShown, setIsFormShown] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ name, email, age });
    };

    return (
        <div>
            {isFormShown ? (
                <form onSubmit={handleSubmit}>
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
