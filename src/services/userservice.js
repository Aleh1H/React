import axios from "axios";

let axiosInstance = axios.create({baseUrl: 'https://jsonplaceholder.typicode.com/users'})

const getUsers = () => axiosInstance.get('');
// const getUser = (id) => axiosInstance.get('/' +id).then(value => value.data);

const getUserPosts = (id) => axiosInstance.get('/${id}/posts');

export {getUsers, getUserPosts}