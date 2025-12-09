import "./User1.css";

export default function User1(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.email}</p>
        </div>
    )
}