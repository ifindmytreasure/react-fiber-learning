import {actionTypes} from './';
import {fromJS} from "immutable";

const defaultState = fromJS({
    focused:false,
    list:[],
    page:1,
    totalPage:1,
    mouseIn:false
});


export default (state = defaultState,action) => {
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            // const newState = JSON.parse(JSON.stringify(state));
            // newState.focused = true;
            // return newState;
            return state.set('focused',true);
        case actionTypes.SEARCH_BLUR:
            //immutable对象的set方法,会结合之前的immutable对象的值
            //和设置的值,返回一个全新的对象
            return state.set('focused',false);
        case actionTypes.CHANGE_LIST:
            return state.merge(
                {
                    list:action.data,
                    totalPage:action.totalPage
                }
            );
            // return state.set('list',action.data).set('totalPage',action.totalPage);
        case actionTypes.HANDLE_MOUSE_ENTER:
            return state.set('mouseIn',true);
        case actionTypes.HANDLE_MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page',action.currentPage);
        default :
            return state;
    }
}