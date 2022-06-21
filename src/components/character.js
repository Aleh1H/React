// function Character(props){
//     let {id, name, story, picture} = props;
//     return(
//         <div>
//             <h2>{name}</h2>
//             <p>{story}</p>
//             <img src= {picture} alt= ""/>
//         </div>
//     )
// }
export default Character;

function Character(props){
    let {id, name, status, species, gender, image} = props;
    return(
        <div>
            <h3>{id}</h3>


        </div>
    )
}