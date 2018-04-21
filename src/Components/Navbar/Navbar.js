import React from 'react';
import './Navbar.css';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends React.Component {
  state = {
    current: 'home',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        className="Navbar"
      >
        <Menu.Item key="home">
          <Icon type="home" />Spymon
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />Lobby
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;