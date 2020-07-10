import React, { Component } from 'react';
import './style.sass';

class Avatar extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { avatar = 'http://www.fanguangcn.cn/static/birdnest/35-mic.jpg' } = this.props;
        console.log(avatar);
        return (
            <div className="avatar">
                <img src={avatar} alt=""/>
            </div>
        )
    }
}

export default Avatar;