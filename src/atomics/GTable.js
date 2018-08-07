import React from 'react';
import {Table} from 'antd';

const GTable = (props) => {
    return (
        <React.Fragment>
            <Table rowSelection={props.rowSelection} columns={props.columns} dataSource={props.dataSource} />
        </React.Fragment>
    );
};

export default GTable;