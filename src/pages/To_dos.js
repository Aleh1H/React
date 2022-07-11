import {useEffect, useState} from "react";

import ApiService from "../api.services/api.service";
import Todoscomponet from "../components/Todoscomponet";

export default function To_dos() {
    let apiService = new ApiService('todos');
    let [todos, setTodos] = useState([])

    useEffect( () => {
apiService.getAllData().then(value => setTodos(value))
    }, [])

    return (
        <div>
            {
                todos.map(value => <Todoscomponet item={value} key={value.id}/>)
            }
        </div>);
}