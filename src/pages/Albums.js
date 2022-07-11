import {useEffect, useState} from "react";

import Albumscomponent from "../components/Albumscomponent";
import ApiService from "../api.services/api.service";


export default function Albums() {

    let apiService = new ApiService('albums')
    let [albums, setAlbums] = useState([]);

    useEffect(() =>{
        apiService.getAllData().then(value => setAlbums(value))
    }, [])

    return (
        <div>
            {
                albums.map(value => <Albumscomponent item={value} key={value.id}/>)
            }
        </div>);
}