import { useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Form } from "./components/Form";
import "./App.css";
import { Detail } from "./components/Detail.jsx";

function App() {
    const [activePersonId, setActivePersonId] = useState(null);
    return (
        <div className="container">
            <Header />
            <Form />
            <List onSelectPerson={(id) => setActivePersonId(id)} />
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
