import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import PostComponent from "../components/PostComponent";

export default function Posts() {

    let [posts, setPosts] = useState([]);
      let {postId} = useParams();


    useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
    .then(value => value.json())
    .then(value => setPosts([{...value}]))
    }, [postId])


    return (
        <div>
            {
                posts.map(post => <PostComponent post={post} key={post.id}/>)
            }
        </div>);
}