import React, {Component} from 'react';
import {Input} from 'antd';
import {Button} from 'antd';
import {DatePicker} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

class BPSet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lowPressure: 80,
            highPressure: 120
        }

        this.updateLowPressure = this.updateLowPressure.bind(this);
        this.updateHighPressure = this.updateHighPressure.bind(this);
        this.setPressure = this.setPressure.bind(this);
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
        // const promiseAll = await Promise.all([
        //     PostPressure()
        // ]);

    }

    render() {
        return (
            <React.Fragment>
                <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                <Input placeholder="high pressure" onChange={this.updateHighPressure} value={this.state.highPressure}/>
                <Input placeholder="low pressure" onChange={this.updateLowPressure} value={this.state.lowPressure}/>
                <Button type="primary" onClick={this.setPressure}>Set</Button>
            </React.Fragment>
        );
    }
}

export default BPSet;