export default function User({item, chosenUser}) {

    return ( <div>
        {item.id} {item.name}
    <button onClick={ ()=> {chosenUser(item);}}> user details</button>

    </div>);
}