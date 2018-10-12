import React, {Component} from 'react';
import {Input} from 'antd';
import {Button} from 'antd';
import {DatePicker} from 'antd';
import {TimePicker} from 'antd';
import moment from 'moment';
import * as PostServices from '../services/post';
import 'antd/dist/antd.css';

class BPSet extends Component {
    dateFormat = 'YYYY-MM-DD';
    timeFormat = 'HH:mm:ss';

    constructor(props) {
        super(props);

        this.state = {
            lowPressure: 80,
            highPressure: 120,
            date: moment(moment()),
            time: moment(moment()),
            selectedMoment: moment(moment()),
            dataFormat: { 
                "tableName" : "bp",
                "colNames" : [
                    "userno", "time", "hbp", "lbp"
                ],
                "colValues" : [
                ]
            },
        }

        this.updateLowPressure = this.updateLowPressure.bind(this);
        this.updateHighPressure = this.updateHighPressure.bind(this);
        this.setPressure = this.setPressure.bind(this);
        this.setDate = this.setDate.bind(this);
        this.setTime = this.setTime.bind(this);
    }

    updateLowPressure(event) {
        this.setState( {lowPressure: event.target.value} );
    }

    updateHighPressure(event) {
        this.setState( {highPressure: event.target.value} );
    }

    setPressure = async(event) => {
        // console.log(this.state.highPressure);
        // console.log(this.state.lowPressure);
        // console.log(this.state.selectedMoment);
        // console.log(this.state.selectedMoment.format('x'));

        let dummyDataSet = this.state.dataFormat;
        // { 
        //     "tableName" : "bp",
        //     "colNames" : [
        //         "time", "name", "highest pressure", "lowest pressure"
        //     ],
        //     "colValues" : [
        //     ]
        // };
        console.log(this.state.selectedMoment);
        let arr = [];
        arr.push(1);
        arr.push(this.state.selectedMoment.format("YYYY-MM-DD HH:mm:ss"));
        arr.push(Number(this.state.highPressure));
        arr.push(Number(this.state.lowPressure));
        dummyDataSet.colValues = arr;

        console.log(dummyDataSet);
        // console.log(this.state.date);
        // console.log(this.state.time);
        // const promiseAll = await Promise.all([
        //     PostPressure()
        // ]);
        this.insertPressure(dummyDataSet)
        .then(function(values) {
            console.log("success")
            window.alert("insertion succeeded")
        },function(error) {
        })
        .catch(function() {
            window.alert("error occurred");
        });
    }

    insertPressure = async(payload) => {
        // var ret = await Promise.all([
        //     PostServices.insertRecord(payload)
        // ])
        // console.log(ret[0]);
        return PostServices.insertRecord(payload);
    }

    setDate(_date, _dateString) {
        const t = this.state.time;

        this.setState( {date: _date});
        this.setState( 
            {selectedMoment: _date
                .startOf('day')
                .add(t.hours(),'h')
                .add(t.minutes(),'m')
                .add(t.seconds(),'s')
                .add(t.milliseconds,'ms')
            });
    }

    setTime(_time, timeString) {
        const t = _time;

        this.setState( {time: _time});
        this.setState( 
            {selectedMoment: this.state.date 
                .startOf('day')
                .add(t.hours(),'h')
                .add(t.minutes(),'m')
                .add(t.seconds(),'s')
                .add(t.milliseconds,'ms')
            });
    }

    render() {
        return (
            <React.Fragment>
                <DatePicker defaultValue={moment(moment(), this.dateFormat)} format={this.dateFormat} onChange={this.setDate}/>
                <TimePicker defaultValue={moment(moment(), this.timeFormat)} onChange={this.setTime}/>
                <Input placeholder="high pressure" onChange={this.updateHighPressure} value={this.state.highPressure}/>
                <Input placeholder="low pressure" onChange={this.updateLowPressure} value={this.state.lowPressure}/>
                <Button type="primary" onClick={this.setPressure}>Set</Button>
            </React.Fragment>
        );
    }
}

export default BPSet;