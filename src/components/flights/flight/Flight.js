export default function Flight({item}) {

    return (
        <div>
            <p> <b>Mission name</b> - {item.mission_name}
               <br/> <b>Launch year</b> - {item.launch_year}</p>
                < img src = {item.links.mission_patch_small} alt={mission_name}/>

        </div>);
}

