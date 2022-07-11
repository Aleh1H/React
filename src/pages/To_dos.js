import {useEffect, useState} from "react";

import Todoscomponet from "../components/Todoscomponet";
import {getTodos} from "../api.services/api.service";

export default function To_dos() {

    let [todos, setTodos] = useState([])

    useEffect( () => {
getTodos().then(value => setTodos(value))
    }, [])

    return (
        <div>
            {
                todos.map(value => <Todoscomponet item={value} key={value.id}/>)
            }
        </div>);
}