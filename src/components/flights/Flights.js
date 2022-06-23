import {useEffect, useState} from "react";
import Flight from "./flight/Flight";

export default function Flights() {

    let [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/")
            .then(value => value.json())
            .then(value => {
                setFlights(value);
            })
    }, []);


    return (
        <div>
            <h2>Space Flights</h2>


            {flights.filter(flight => flight.launch_year!=="2020").map(flight => <Flight item = {flight}/>)}


        </div>);
}











// .filter(flight => <div> {item.launch_year = 2006}</div>)
{/*{flights.map(flight => <Flight item = {flight}/>).filter(flight =><flight.launch_year = '2006'/>)}*/}