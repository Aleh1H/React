import {Outlet} from 'react-router-dom';

import {useEffect, useState} from "react";
import Commentscomponent from "../components/Commentscomponent";
import {getComments} from "../api.services/api.service";

export default function Comments() {

    let[comments, setComments] = useState([]);

    useEffect(() => {
       getComments().then(value => setComments(value))
    },[])
    return (
        <div>
            <hr/>
            <h3>post</h3>
            <Outlet/>
            <hr/>

            {
                comments.map(value => <Commentscomponent item={value} key={value.id}/>)
            }

        </div>);
}