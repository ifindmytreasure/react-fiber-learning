import React from "react";
import {connect} from 'react-redux';
import {DetailWrapper,Header,Content,Description} from './styled';
import {actionCreators} from "./store";
import {withRouter} from 'react-router-dom';

class Detail extends React.Component{
    render() {
        console.log();
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Description dangerouslySetInnerHTML={{__html: this.props.description}}/>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapState = (state) => ({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content']),
    description:state.getIn(['detail','description'])
});
const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetailAction(id));
    }
});
export default connect(mapState,mapDispatch)(withRouter(Detail));