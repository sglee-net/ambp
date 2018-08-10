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
// //?tableName=bp');
    // axios.get('http://localhost:8080', {
    //     // params: {
    //     //     tableName: 'bp'
    //     // }
    // })
    // .then(
    //     res => {
    //         console.log(res);
    //     }
    // )
    // .catch(
    //     res => {
    //         console.log(res);
    //     }
    // )
}
