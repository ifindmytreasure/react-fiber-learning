import {actionTypes} from './';
import axios from 'axios';
import {fromJS} from 'immutable';




export const getSearchFocusAction = () => ({
    type:actionTypes.SEARCH_FOCUS
});
export const getSearchBlurAction = () => ({
    type:actionTypes.SEARCH_BLUR
});
//无需导出
export const getListAction = (data) => ({
    type:actionTypes.CHANGE_LIST,
    //要将data转变为immutable类型
    data:fromJS(data),
    totalPage:Math.ceil(data.length / 10)
});

export const getHandleMouseEnterAction = () => ({
    type:actionTypes.HANDLE_MOUSE_ENTER
});
export const getHandleMouseLeaveAction = () => ({
    type:actionTypes.HANDLE_MOUSE_LEAVE
});
export const getChangePageAction = (currentPage) => ({
    type:actionTypes.CHANGE_PAGE,
    currentPage
})
export const getList = () =>{
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            const action = getListAction(data.data);
            dispatch(action);
        }).catch(() => {
                console.error("未获取到数据");
            }
        )
    }
};