import {useForm} from "react-hook-form";
import {saveComment} from "./comments.services/comments.services";

export default function App() {

let {register, handleSubmit} = useForm();

let add = (data) => {
    console.log(data)
    saveComment (data).then(({data}) => console.log(data))
}

    return (
        <div>
            <form onSubmit={handleSubmit(add)}>
                <input type="text" {...register('postId')}/>
                <input type="number" {...register('id')}/>
                <input type="text" {...register('name')}/>
                <input type="email" {...register('email', {})}/>
                <input type="text" {...register('body')}/>
                <br/>
                <button>submit</button>
            </form>
        </div>);
}