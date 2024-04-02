import { useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { Detail } from "./components/Detail";
import "./App.css";

function App() {
    const [activePersonId, setActivePersonId] = useState(null);

    return (
        <div className="container">
            <Header />
            <Form />
            <List onPersonSelect={setActivePersonId} />
            {activePersonId !== null && (
                <Detail
                    id={activePersonId}
                    onClose={() => setActivePersonId(null)}
                />
            )}
        </div>
    );
}

export default App;
