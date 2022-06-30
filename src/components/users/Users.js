import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services";

export default function Users(elevate) {

    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));

    }, [])


    return (
        <div>
            {
                users.map(value => <User
                    key={value.id}
                    item={value}
                    elevate={elevate}
                />)

            }
        </div>);
}















