import axios from "axios";

let axiosInstance = axios.create({baseURL:'https://jsonplaceholder.typicode.com/users'});
const getUsers = () => axiosInstance.get('');
const getUser = (id) => axiosInstance.get('/' +id);

const getUserPosts = (id) => axiosInstance('/' + id + '/posts')

export {getUsers, getUser, getUserPosts}