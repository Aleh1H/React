export default function Todoscomponet({item: {id, title}}) {
    return (
        <div>
            {id} - {title}
        </div>);
}