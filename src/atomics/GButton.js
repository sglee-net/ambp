import React from 'react';
import {Button} from 'antd';

const GButton = (props) => {
    return(
        <React.Fragment>
            <Button type="primary" onChange={props.onChange}>
                {prosp.value}
            </Button>
        </React.Fragment>
    );
};

export default GButton;