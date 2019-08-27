import axios from 'axios';
import {actionTypes} from './index';
import {fromJS} from "immutable";




const changHomeData = (result) => (
    {
    type:actionTypes.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = changHomeData(result);
            dispatch(action);
        }).catch(() => {
            console.log("未获取到数据");
        });
    }
};

const moreListAction = (result,nextPage) => ({
    type:actionTypes.GET_MORE_LIST,
    articleList:fromJS(result),
    nextPage:fromJS(nextPage)
});

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            const action = moreListAction(result,page+1);
            dispatch(action);
        }).catch(() => {
            console.log("未获取到数据");
        });
    }
};

export const toggleScroll = (show)=> ({
    type:actionTypes.TOGGLE_SCROLL,
    show:show
});