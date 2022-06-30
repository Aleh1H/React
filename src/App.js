import {useForm} from "react-hook-form";
import {saveUser} from "./services/user.services";

export default function App() {

    let {register, handleSubmit} = useForm({
        defaultValues: {id: 'user id', name: 'name', username: 'username', email: 'email'}
    });
    let submit = (data) => {
        console.log(data)
        saveUser(data).then(({data}) => console.log(data));
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register("id")}/>
                <input type="text" {...register("name")}/>
                <input type="text" {...register("username")}/>
                <input type="text" {...register("email")}/>
                <hr/>
                <h4><i>address</i></h4>
                <input type="text" {...register("address.street")}/>
                <input type="text" {...register("address.city")}/>
                <input type="text" {...register("address.zipcode")}/>
                <input type="text" {...register("address.geo.lat")}/>
                <input type="text" {...register("address.geo.lng")}/>
                <hr/>
                <input type="text" {...register("phone")}/>
                <input type="text" {...register("website")}/>
                <input type="text" {...register("company.name")}/>
                <input type="text" {...register("company.catchPhrase")}/>
                <input type="text" {...register("company.bs")}/>

                <button>save</button>
            </form>


        </div>);
}