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
            userId: 'sglee',
            lowPressure: 80,
            highPressure: 120,
            date: moment(moment()),
            time: moment(moment()),
            selectedMoment: moment(moment()),
            dataFormat: { 
                userId: "",
                time: "",
                hbp: 120,
                lbp: 80,
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
        let payload = this.state.dataFormat;
        payload.userId = this.state.userId;
        payload.time = this.state.selectedMoment.format("YYYY-MM-DD HH:mm:ss")
        payload.hbp = Number(this.state.highPressure)
        payload.lbp = Number(this.state.lowPressure)

        PostServices.insertCustom(payload)
        .then(response => {
            console.log("insertion succeeded")
            window.alert("insertion succeeded")
        },
        function(error) {
            console.log("error in getPressure")
        })
        .catch(function(error) {
            window.alert("error occurred");
        });
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