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

export function getSelectCustom(_userId, _fromTime, _toTime) {
    console.log(_userId)
    console.log(_fromTime)
    console.log(_toTime)
    return axios.get('http://localhost:8080/selectCustom', { 
        params: {
            userId: _userId,
            fromTime: _fromTime,
            toTime: _toTime,
        },
        axiosConfig
    });
}

// export function insertCustom(_userId, _time, _hbp, _lbp) {
//     console.log(_userId)
//     console.log(_time)
//     console.log(_hbp)
//     console.log(_lbp)
//     return axios.get('http://localhost:8080/insertCustom', {
//         params: {
//             userId: _userId,
//             time: _time,
//             hbp: _hbp,
//             lbp: _lbp
//         },
//         axiosConfig
//     }); 
// }