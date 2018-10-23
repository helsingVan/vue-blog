import React, { Component } from 'react';

class Card extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const { dataObj } = this.props;
        return (
            <div className="card">
                <figure className="card-image">
                    <img src={dataObj.url} alt=""/>
                </figure>
                <div className="card-content">
                    <p className="title">{dataObj.title}</p>
                    <p className="sub-title">{dataObj.subTitle}</p>
                </div>
            </div>
        );
    }
}

export default Card;