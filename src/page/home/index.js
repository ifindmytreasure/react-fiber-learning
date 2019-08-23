import React from "react";
import Topic from "./component/Topic";
import Writer from "./component/Writer";
import List from "./component/List";
import Recommend from "./component/Recommend";
import axios from 'axios';
import {connect} from "react-redux";
import
{
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends React.Component{
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4707/589f8bc74616a27b1b3ffaa282210bed81324261.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = {
                type:'change_home_data',
                topicList:result.topicList,
                articleList:result.articleList,
                recommendList:result.recommendList
            };
            this.props.changeHomeData(action);
        }).catch(() => {
            console.log("未获取到数据");
        })

    }
}
const mapDispatch = (dispatch) => ({
    changeHomeData(action){
        dispatch(action);
    }
});
export default connect(null,mapDispatch)(Home);