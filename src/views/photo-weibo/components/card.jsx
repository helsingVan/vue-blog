import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const { dataObj } = this.props;
        return (
            <div className="card">
                <figure className="card-image">
                    <Link to="/photofull?name=4">
                        <img src={dataObj.url} alt=""/>
                    </Link>
                    
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