import {fromJS} from 'immutable';
import {actionTypes} from './index';

const defaultState = fromJS({
    topicList:[],
    articleList: [],
    recommendList: [],
    articlePage:1,
    showScroll:false
});

export default (state = defaultState,action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                topicList:fromJS(action.topicList),
                articleList:fromJS(action.articleList),
                recommendList:fromJS(action.recommendList)
            });
        case actionTypes.GET_MORE_LIST:
            console.log(action.articleList);
            return state.merge({
                'articleList':state.get('articleList').concat(action.articleList),
                'articlePage':action.nextPage
            });
        case actionTypes.TOGGLE_SCROLL:
            return state.set('showScroll',action.show);
        default:
            return state;
    }
}