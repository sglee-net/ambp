import axios from 'axios';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

export function getBpAll() {
    return axios.get('http://localhost:8080/selectAll', { 
        params: {
            tableName: 'bp',
        },
        axiosConfig
    });
}
