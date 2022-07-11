import {Link} from "react-router-dom";


export default function Commentscomponent({item:{id, postId, name}}) {
    return (
        <div>

            {id} - {name} <Link to={postId.toString()}>coment's post</Link>
        </div>);
}