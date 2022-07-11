import {useEffect, useState} from "react";

import Albumscomponent from "../components/Albumscomponent";
import {getAlbums} from "../api.services/api.service";


export default function Albums() {


    let [albums, setAlbums] = useState([]);

    useEffect(() =>{
        getAlbums().then(value => setAlbums([...value]))
    }, [])

    return (
        <div>
            {
                albums.map(value => <Albumscomponent item={value} key={value.id}/>)
            }
        </div>);
}