import React from 'react';
import {LoginWrapper,LoginBox,Input,Button} from './style';
import {connect} from "react-redux";
import {actionCreators} from './store';
import {Redirect}from 'react-router-dom';

class Login extends React.PureComponent{
    render() {
        const {loginStatus} = this.props;
        console.log(loginStatus)
        if (!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => {this.account = input}}/>
                        <Input placeholder="密码" ref={(input) => {this.password=input}} type='password'/>
                        <Button onClick={() => this.props.login(this.account.value,this.password.value)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            );
        }else{
            return <Redirect to='/'/>
        }

    }
}

const mapState = (state) => ({
    loginStatus:state.getIn(['login','login'])
});

const mapDispatch= (dispatch) => ({
    login(account,password){
        dispatch(actionCreators.login(account,password));
    }
});

export default connect(mapState,mapDispatch)(Login);