import React, {Component} from 'react';
import {Table} from 'antd';
import {Button} from 'antd';
import moment from 'moment';
import {DatePicker} from 'antd';
import * as GetServices from '../services/get';
import * as PostServices from '../services/post';
import 'antd/dist/antd.css';

class BPTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // columns: [{
            //     title: 'userId',
            //     dataIndex: 'userId',
            //     key: 'userId',
            //     // render: text => {text}//<a href="javascript:;">{text}</a>,
            // }, {
            //     title: 'id',
            //     dataIndex: 'id',
            //     key: 'id',
            // }, {
            //     title: 'title',
            //     dataIndex: 'title',
            //     key: 'title',
            // }, {
            //     title: 'body',
            //     dataIndex: 'body',
            //     key: 'body',
            // }], 
            // columns: [],
            dataSetFormat: { 
                "tableName" : "bp",
                "colNames" : [
                    "userno", "time", "hbp", "lbp"
                ],
                "whereClause" : "userno=1"
            },
            columns: [
                {
                    title: 'userno',
                    dataIndex: 'userno',
                    key: 'userno'
                },
                {
                    title: 'time',
                    dataIndex: 'time',
                    key: 'time'
                },
                {
                    title: 'hbp', //this.state.dataSetFormat.colNames[2], //'hbp',
                    dataIndex: 'hbp',
                    key: 'hbp'
                }, 
                {
                    title: 'lbp', //this.state.dataSetFormat.colNames[3], //'lbp',
                    dataIndex: 'lbp',
                    key: 'lbp'
                },
            ],
            dataSource: [],
            selectedRowKeys: [],
            dateFrom: moment(moment()),
            dateTo: moment(moment()),
        }

        this.getPressure = this.getPressure.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.changeDateRange = this.changeDateRange.bind(this);
    }

    getPressure() {
        let dummyDataSet = this.state.dataSetFormat;
        // console.log(dummyDataSet)

        this.postPressure(dummyDataSet)
        // this.postPressure(dummyDataSet)
        // .then(function(value) {
        //     // console.log(value)
        //     // console.log("postPressure")
        //     // console.log(value.data.dataSource);
        //     for(let i=0; i<value.data.dataSource.length; i++) {
        //         value.data.dataSource[i].key = i+1;
        //     }
        //     console.log(value.data);
        //     console.log("getPressure succeeded") 
        //     this.setState( {dataSource: value.data.dataSource} );
        //     this.setState( {columns : this.state.columns});
        // },
        // function(error) {
        //     console.log("error in getPressure")
        // })
        // .catch(function(error) {
        //     window.alert("error occurred");
        // });
    }

    postPressure = async(payload) => {
        console.log('getPressure');
        var ret = await Promise.all([
            GetServices.getBpAll()
        ]);
        // console.log(ret[0].data);
        // const d = (ret[0].data.dataSource);
        // console.log(d);
        // console.log(ret[0].data);
        for(let i=0; i<ret[0].data.dataSource.length; i++) {
            ret[0].data.dataSource[i].key = i+1;
        }
        console.log(ret[0].data.dataSource);

        this.setState( {dataSource: ret[0].data.dataSource} );
        // this.setState( {columns: ret[0].data.columns} );
        // this.setState( {columns : this.state.columns});

        // return GetServices.getBpAll();
//        return PostServices.getBps(payload);

    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    changeDateRange(_date, _dateString) {
        this.setState({dateFrom: _date[0].startOf('day')});
        this.setState({dateTo: _date[1].endOf('day')});

        console.log(_date[0].startOf('day'));
        console.log(_date[1].endOf('day'));
        // console.log(this.state.dateFrom);
        // console.log(this.state.dateTo);
    }

    render() {
        // const { selectedRowKeys } = this.state;
        // const rowSelection = {
        // selectedRowKeys,
        // onChange: this.onSelectChange,
        // hideDefaultSelections: true,
        // selections: [{
        //     key: 'all-data',
        //     text: 'Select All Data',
        //     onSelect: () => {
        //     this.setState({
        //         selectedRowKeys: [...Array(46).keys()], // 0...45
        //     });
        //     },
        // }, {
        //     key: 'odd',
        //     text: 'Select Odd Row',
        //     onSelect: (changableRowKeys) => {
        //     let newSelectedRowKeys = [];
        //     newSelectedRowKeys = changableRowKeys.filter((key, index) => {
        //         if (index % 2 !== 0) {
        //         return false;
        //         }
        //         return true;
        //     });
        //     this.setState({ selectedRowKeys: newSelectedRowKeys });
        //     },
        // }, {
        //     key: 'even',
        //     text: 'Select Even Row',
        //     onSelect: (changableRowKeys) => {
        //     let newSelectedRowKeys = [];
        //     newSelectedRowKeys = changableRowKeys.filter((key, index) => {
        //         if (index % 2 !== 0) {
        //         return true;
        //         }
        //         return false;
        //     });
        //     this.setState({ selectedRowKeys: newSelectedRowKeys });
        //     },
        // }],
        // onSelection: this.onSelection,
        // };

        const dateFormat = 'YYYY/MM/DD';
        const {RangePicker} = DatePicker;

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User', // Column configuration not to be checked
              name: record.name,
            }),
        };

        return (
            <React.Fragment>
                <RangePicker defaultValue={[moment(moment(),dateFormat),moment(moment(),dateFormat)]} onChange={this.changeDateRange} />
                {/* defaultValue={moment('2010/01/01', dateFormat)}  */}
                <Button type="primary" onClick={this.getPressure}>Get</Button>
                <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.dataSource}/>
            </React.Fragment>
        );
    }
}

export default BPTable;