import {actionTypes} from './';
import {fromJS} from "immutable";

const defaultState = fromJS({
    focused:false
});


export default (state = defaultState,action) => {
    if (action.type === actionTypes.SEARCH_FOCUS){
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.focused = true;
        // return newState;
        return state.set('focused',true);
    }
    if (action.type === actionTypes.SEARCH_BLUR){
        //immutable对象的set方法,会结合之前的immutable对象的值
        //和设置的值,返回一个全新的对象
        return state.set('focused',false);
    }
    return state;
}