import axios from 'axios';

export function getExample() {
    // return axios.get('https://jsonplaceholder.typicode.com/posts/');
    const ret = axios.get('http://localhost:8080/selectAll', { 
        params: {
            tableName: 'bp'
        }
    });

    console.log(ret);
    return ret;
//?tableName=bp');
}
