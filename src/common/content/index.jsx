import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { routerList } from '../../config';

import './style.sass';
class MainContent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            routerList
        };
    }
    render () {
        const { children } = this.state.routerList[0];
        return (
            <div className="main-content">
                {
                    children.map(item => (
                        <Route
                            key={item.id}
                            path={item.path}
                            component={item.component}
                        />
                    ))
                }
            </div>
        );
    }
}

export default MainContent;