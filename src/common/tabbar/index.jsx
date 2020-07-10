import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routerList } from '../../config';
import './style.sass';

class MainTabBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tabList: routerList
        }
    }
    render () {
        const { children } = this.state.tabList[0];
        return (
            <nav className="main-tabbar">
                {
                    children.map(item => (
                        <NavLink 
                            key={item.id}
                            to={item.path}
                        >
                            {item.name}
                        </NavLink>
                    ))
                }
            </nav>
        );
    }
}

export default MainTabBar;