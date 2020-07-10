import { SHOW_CAROUSEL_MODAL } from './constant';
import defaultState from './state';
import actions from './actions';

export default (state, action) => {
    state = actions[action.type] ? actions[action.type](action.value) : defaultState;
    return state;
}