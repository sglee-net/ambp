import axios from 'axios';
import qs from 'qs';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

export function insertRecord(payload) {
    return axios.post('http://localhost:8080/record', 
        JSON.stringify(payload),
        axiosConfig
    );
}

export function insertCustom(payload) {
    console.log("insertCustom {}",payload)
    return axios.post('http://localhost:8080/insertCustom', 
        JSON.stringify(payload),
        axiosConfig
    ); 
}