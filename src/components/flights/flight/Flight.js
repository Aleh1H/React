export default function Flight({item}) {

    return (
        <div>
            <p> <b>Mission name</b> - {item.mission_name} <b>Launch year</b> - {item.launch_year} <br/> <b>mission patch</b> - {item.links.mission_patch_small}</p>

        </div>);
}

//