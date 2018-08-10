import React, {Component} from 'react';
import {Input} from 'antd';
import {Button} from 'antd';
import {DatePicker} from 'antd';
import {TimePicker} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

class BPSet extends Component {
    dateFormat = 'YYYY/MM/DD';
    timeFormat = 'HH:mm:ss';

    constructor(props) {
        super(props);

        this.state = {
            lowPressure: 80,
            highPressure: 120,
            date: moment(moment()),
            time: moment(moment()),
            selectedMoment: moment(moment())
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
        console.log(this.state.highPressure);
        console.log(this.state.lowPressure);
        console.log(this.state.selectedMoment);
        console.log(this.state.selectedMoment.format('x'));

        // console.log(this.state.date);
        // console.log(this.state.time);
        // const promiseAll = await Promise.all([
        //     PostPressure()
        // ]);

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