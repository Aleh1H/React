function Character(props){
    let {id, name, story, picture} = props;
    return(
        <div>
            <h2>{name}</h2>
            <p>{story}</p>
            <img src= {picture} alt= ""/>
        </div>
    )
}
export default Character;

