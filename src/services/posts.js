import axios from 'axios';

export function getExample() {
    return axios.get('https://jsonplaceholder.typicode.com/posts/');
}
