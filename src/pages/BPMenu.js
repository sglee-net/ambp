import React, {Component} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';

class BPMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
        collapsed: false
        }

        this.toggleCollapsed = this.toggleCollapsed.bind(this);
    }

    toggleCollapsed() {
        this.setState({toggleCollapsed : !this.state.toggleCollapsed});
    }

    render() {
        // const SubMenu = Menu.SubMenu;
        return (
            <React.Fragment>
                <Menu
                    theme='dark'
                    mode='horizontal'
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '32px' }}>
                    <Menu.Item key='1'>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item key='2'>
                        <Link to='/bpinput'>Input</Link>
                    </Menu.Item>
                    <Menu.Item key='3'>
                        <Link to='/bphistory'>History</Link>
                    </Menu.Item>
                    <Menu.Item key='4'>
                        <Link to='/bpstatistics'>Summary</Link>
                    </Menu.Item>
                </Menu>
            </React.Fragment>
        );
    }
}

export default BPMenu;