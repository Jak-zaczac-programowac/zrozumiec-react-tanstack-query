import "./Detail.css";

export function Detail({ onClose }) {
    return (
        <div className="detail">
            <button onClick={onClose} type="button">
                X
            </button>
            <h2>Informacje:</h2>
        </div>
    );
}
