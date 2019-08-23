import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    SearchInfoTitle,
    Nav,
    NavItem,
    Diamond,
    NavSearch,
    SearchInfoSwitch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoItem,
    SearchInfoList
} from "./style";

class Header extends React.Component{
    getListArea(){
        const {page,list,mouseIn,totalPage,handleChangePage,handleMouseEnter,handleMouseLeave,focused} = this.props;
        const jsList = list.toJS();
        const pageList = [];
        if (jsList.length > 0){
            for (let i = (page - 1) * 10; i < page*10;i++){
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage,this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        }else {
            return null;
        }
    }

    render() {
        const {handleInputFocus,handleInputBlur,focused,list} = this.props;
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <Diamond/>
                    <NavItem className='right'>
                        <i className="iconfont">Aa{/*&#xe636;*/}</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={400}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused?'focused':''}
                                onFocus={() =>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused?'focused iconfont zoom':'iconfont zoom'}>&#xe64d;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                    <Addition>
                        <Button className='write'>
                            <i className="iconfont">{/*&#xe61c;*/}</i>写文章
                        </Button>
                        <Button className='register'>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        focused:state.getIn(['header','focused']),
        // focused:state.get('header').get('focused')
        list:state.getIn(["header",'list']),
        page:state.getIn(["header","page"]),
        mouseIn:state.getIn(["header","mouseIn"]),
        totalPage:state.getIn(["header","totalPage"])
    }
};

const mapDispatchToPros = (dispatch) => {
    return {
        handleInputFocus(list){
            console.log(list)
            dispatch(actionCreators.getSearchFocusAction());
            (list.size)<=0 && dispatch(actionCreators.getList());
        },
        handleInputBlur(){
            dispatch(actionCreators.getSearchBlurAction());
        },
        handleMouseEnter(){
            dispatch(actionCreators.getHandleMouseEnterAction())
        },
        handleMouseLeave(){
            dispatch(actionCreators.getHandleMouseLeaveAction())
        },
        handleChangePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle){
                originAngle = parseInt(originAngle,10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if (page < totalPage){
                dispatch(actionCreators.getChangePageAction(page + 1))
            }else {
                dispatch(actionCreators.getChangePageAction(1))
            }
        }
    }
};

export default connect(mapStateToProps,mapDispatchToPros)(Header);
