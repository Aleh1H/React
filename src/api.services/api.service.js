export default function ApiService(endpoint) {
    this.getAllData = () => fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .then(value => value.json())
    this.getSingleData = (postId) => fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${postId}`)
        .then(value => value.json())
}