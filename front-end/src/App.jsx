import { Header } from "./components/Header";
import { List } from "./components/List";
import { Form } from "./components/Form";
import "./App.css";

function App() {
    return (
        <div className="container">
            <Header />
            <Form />
            <List />
        </div>
    );
}

export default App;
