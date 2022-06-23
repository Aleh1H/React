import {useEffect, useState} from "react";
import User from "./user/User";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })
    },[]);

const chosenUser = (item) => {
    setUser(item)
}
    return (
        <div>
            {user && <div> <b>name</b> - {user.name} <b>email</b> - { user.email} <b>phone</b> - { user.phone} </div>}
            <h2>Users</h2>
            {users.map((user, index) => <User key={index} item = {user} chosenUser={chosenUser}/> )}


        </div>);
}













