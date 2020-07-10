import React, { Component } from 'react';
import Card from './components/card';
import { data } from '../../config';
import './style.sass';


class PhotoWeibo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: data.photoWeiboList
        };
    }
    render () {
        const { list } = this.state;
        return (
            <div className="photoweibo">
                <section className="photoweibo-card-container">
                    {
                        list.map((item, index) => (
                            <Card dataObj={item} key={index}/>
                        ))
                    }
                </section>
            </div>
        );
    }
}

export default PhotoWeibo;