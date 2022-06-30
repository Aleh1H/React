export default function User({item,elevate, getUserId}) {
    const onClick = () => {
        elevate(item.id);
    }

    return (
        <div>
            <h3>{item.name}</h3>
            <button onClick={onClick}>show posts</button>
        </div>);
}