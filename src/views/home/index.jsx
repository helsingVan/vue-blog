import React, { Component, Fragment } from 'react';
import MainTabBar from '../../common/tabbar';
import MainContent from '../../common/content';

class Home extends Component {
    render () {
        return (
            <Fragment>
                <MainContent/>
                <MainTabBar/>
                
            </Fragment>
        );
    }
}

export default Home;