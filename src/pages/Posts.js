import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import PostComponent from "../components/PostComponent";
import {getPostComment} from "../api.services/api.service";

export default function Posts() {

    let [posts, setPosts] = useState({});
    let {postId} = useParams();


    useEffect(() => {
       getPostComment(postId).then(value => setPosts(value))
    }, [postId])


    return (
        <div>
            <PostComponent post={posts}/>

        </div>);
}