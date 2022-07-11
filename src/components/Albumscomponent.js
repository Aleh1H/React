export default function Albumscomponent({item: {id, title}}) {
    return (
        <div>
            {id} - {title}
        </div>);
}