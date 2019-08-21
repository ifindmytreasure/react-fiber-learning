import React from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,Diamond,NavSearch,Addition,Button,SearchWrapper} from "./style";
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import { actionCreators } from './store';

const Header = (props) => {
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
                        in={props.focused}
                        timeout={400}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused?'focused':''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        />
                    </CSSTransition>
                    <i className={props.focused?'focused iconfont':'iconfont'}>&#xe64d;</i>
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
};


const mapStateToProps = (state) => {
    return {
        focused:state.getIn(['header','focused'])
        // focused:state.get('header').get('focused')
    }
};

const mapDispatchToPros = (dispatch) => {
    return {
        handleInputFocus(){
            dispatch(actionCreators.getSearchFocusAction());
        },
        handleInputBlur(){
            dispatch(actionCreators.getSearchBlurAction());
        }
    }
};

export default connect(mapStateToProps,mapDispatchToPros)(Header);
