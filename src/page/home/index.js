import React from "react";
import Topic from "./component/Topic";
import Writer from "./component/Writer";
import List from "./component/List";
import Recommend from "./component/Recommend";
import {connect} from "react-redux";
import
{
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
import {actionCreators} from "./store";

class Home extends React.PureComponent{
    handleScrollTop(){
        window.scrollTo(0,0);
    }


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
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop>:null}
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScroll(document.documentElement.scrollTop));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScroll(document.documentElement.scrollTop));
    }
}
const mapDispatch = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScroll(scroll){
        console.log(scroll);
        if (scroll >=0){
            dispatch(actionCreators.toggleScroll(true));
        }else {
            dispatch(actionCreators.toggleScroll(false));
        }
    }
});
const mapState = (state) => ({
    showScroll:state.getIn(['home','showScroll'])
});
export default connect(mapState,mapDispatch)(Home);