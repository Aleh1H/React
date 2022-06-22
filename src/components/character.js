// function Character(props){
//     let {name, story, picture} = props;
//     return(
//         <div>
//             <h2>{name}</h2>
//             <p>{story}</p>
//             <img src= {picture} alt= {name}/>
//         </div>
//     )
// }
export default Character;

function Character(props){
    let {id, name, status, species, gender, image} = props;
    return(
        <div>
            <h3>{id}</h3>
            <h4>{name}</h4>
            <h5>{status}</h5>
            <h5>{species}</h5>
            <h5>{gender}</h5>
            <img src ={image} alt =""/>
        </div>
    )
}

