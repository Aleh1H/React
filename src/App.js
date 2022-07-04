import Users from "./components/users/Users";
import {useState} from "react";
import {getUserPosts} from "./services";

export default function App() {

    let[posts, setPosts] = useState([]);
    const getUserId = (id) => {
getUserPosts(id).then(({data}) => setPosts([...data]))
    }

    return (
        <div>
            <h2>posts of chosen user</h2>
            {
                posts.map(value => <div>{value.body}</div>)
            }
            <hr/>
            <br/>
            <hr/>
            <Users getUserId={getUserId}/>
        </div>);
}