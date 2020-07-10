import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd-mobile';
import { HIDE_CAROUSEL_MODAL } from '../../store/constant';


import './style.sass';

class CarouselModal extends Component {
    constructor (props) {
        super(props);

        this.modalClickHandle = this.modalClickHandle.bind(this);
    }

    modalClickHandle (e) {
        e.persist();
        console.log(e);
        this.props.hideCarouselModal();
    }
    
    render () {
        const {
            show,
            data
        } = this.props.carouselModal;
        
       
        return (
            show ? 
            <Fragment>
                <div className="carousel-modal" onClick={this.modalClickHandle}>
                    <Carousel className="carousel" selectedIndex={data.currentIndex}>
                        {
                            data.imgList.map((imgUrl, index) => (
                                <div className="img-box" key={index}>
                                    <img src={imgUrl} />
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </Fragment> : 
            <Fragment></Fragment>
            
        );
    }
}

const mapStateToProps = ({carouselModal}) => ({
    carouselModal
});

const mapDispatchToProps = (dispatch) => ({
    hideCarouselModal () {
        dispatch({
            type: HIDE_CAROUSEL_MODAL
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CarouselModal);