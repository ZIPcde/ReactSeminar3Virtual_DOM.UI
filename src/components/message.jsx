import "./message.css";
export function Message(props) {
    return (
        <h2 className={props.style}>{props.message}</h2>
    )
};
// export default message;

