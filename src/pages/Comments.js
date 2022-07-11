import ApiService from "../api.services/api.service";
import {Outlet} from 'react-router-dom';

import {useEffect, useState} from "react";
import Commentscomponent from "../components/Commentscomponent";

export default function Comments() {

    let apiService = new ApiService('comments');
    let[comments, setComments] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setComments(value))
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