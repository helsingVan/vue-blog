import React, { Component } from 'react';

import './style.sass';

class TopBar extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { back, title } = this.props
        return (
            <div className="main-topbar clearfix">
                <div className="l" onClick={this.props.backHandle}>
                    {
                        back ? <i className="iconfont icon-back"></i> : ''
                    }
                </div>
                <p className="title">{title}</p>
            </div>
        );
    }
}

export default TopBar;