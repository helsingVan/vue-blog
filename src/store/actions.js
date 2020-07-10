import * as CONSTANT from './constant';
import defaultState from './state';
import { cloneDeep } from 'lodash';


export default {
    [CONSTANT.SHOW_CAROUSEL_MODAL] (actionValue) {
        const state = cloneDeep(defaultState);

        state.carouselModal.data = actionValue;
        state.carouselModal.show = true;
        return state;
    },
    [CONSTANT.HIDE_CAROUSEL_MODAL] (actionValue = {}) {
        const state = cloneDeep(defaultState);
        
        console.log('xx');
        state.carouselModal.data = actionValue;
        state.carouselModal.show = false;
        console.log(state);
        return state;
    }
};