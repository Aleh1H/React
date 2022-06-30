export default function posts({posts}) {
    return (
        <div>
            {
                posts.map(value => <div>{value.body}</div>)
            }


        </div>);
}