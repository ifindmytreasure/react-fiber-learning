import React from "react";
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";

class Write extends React.PureComponent{

    render() {
        const {loginStatus} = this.props;
        if (loginStatus){
            return (
                <div>写文章</div>
            )
        }else {
            return <Redirect to='/login'/>
        }
    }
}
const mapState = (state) => ({
    loginStatus:state.getIn(['login','login'])
})
export default connect(mapState,null)(Write);