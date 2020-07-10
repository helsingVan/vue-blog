import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { connect } from 'react-redux';
import { data } from '../../config';
import Avatar from '../../common/avatar';
import './style.sass';
import { dispatch } from 'rxjs/internal/observable/pairs';
import {
    SHOW_CAROUSEL_MODAL
} from '../../store/constant';

class NormalWeibo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: data.normalWeiboList
        };
        this.listClickHandle = this.listClickHandle.bind(this);
    }
    
    listClickHandle (events) {
        events.persist();
        console.log(events);
    }

    // imgClickHandle (currentIndex, imgList) {
    //     console.log(currentIndex, imgList);
    // }

    render () {
        const { list } = this.state;
        const { imgClickHandle } = this.props;
        return (
            <div className="normalweibo" >
                <List className="weibo-list">
                    {
                        list.map((item, index) => (
                            <List.Item key={index} wrap>
                                <div className="title">
                                    <Avatar/>
                                    <div className="title-info">
                                        <p>撸代码的husky🤠🤠🤠</p>
                                        <time>2018-01-01</time>
                                    </div>

                                </div>
                                <p className="sub-title">{item.content}</p>
                                <figure className="img-container">
                                    {
                                        item.imgList.map((imgItem, imgIndex) => (
                                            <img src={imgItem} key={imgIndex} 
                                                onClick={imgClickHandle.bind(this, imgIndex, item.imgList)}/>
                                        ))
                                    }
                                </figure>
                            </List.Item>
                        ))
                    }
                </List>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    imgClickHandle (currentIndex, imgList) {
        let action = {
            type: SHOW_CAROUSEL_MODAL,
            value: { currentIndex, imgList }
        };
        dispatch(action);
    }
});

export default connect(null, mapDispatchToProps)(NormalWeibo);