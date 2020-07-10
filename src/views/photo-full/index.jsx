import React, { Component } from 'react';
import TopBar from '../../common/topbar';
import { data } from '../../config';

import './style.sass';

const Swiper = window.Swiper;

class PhotoFull extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: data.photoWeiboList,
            activePhotoIndex: 1
        };
        this.backHandle = this.backHandle.bind(this);
    }

    componentDidMount () {
        const self = this;
        this.swiper = new Swiper(this.refs.swiperEl, {
            direction: 'vertical',
            on: {
                slideChangeTransitionEnd: function () {
                    console.log(this.activeIndex);
                    self.setState({
                        activePhotoIndex: this.activeIndex + 1
                    });
                }
            }
        });
        
    }

    backHandle () {
        this.props.history.goBack();
    }

    render () {
        const { list, activePhotoIndex } = this.state;
        let topBarTitle = `(${activePhotoIndex}/${list.length})`;
        return (
            <div className="photo-full">
                <TopBar 
                    back 
                    backHandle={this.backHandle}
                    title={topBarTitle}
                />
                <div className="swiper-container" ref="swiperEl">
                    <div className="swiper-wrapper">
                        {
                            list.map((item, index) => (
                                <div className="swiper-slide" key={index}>
                                    <img src={item.url} alt=""/>
                                    <div className="photo-info">
                                        <p>test</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default PhotoFull;