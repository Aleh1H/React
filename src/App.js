import Users from "./components/users/Users";
import {useState} from "react";
import {getUserPosts} from "./services";


export default function App() {

    let [posts, setPosts] = useState([])
    const elevate = (id) => {
        getUserPosts(id).then(({data}) => setPosts([...data]));
    }

    return (
        <div>
            <Users/>
            <h2> user posts</h2>
            {
                posts.map(value => <div> {value.title}</div>)
            }

            <Users elevate={elevate}/>
            <posts posts={posts}/>

        </div>);
}












