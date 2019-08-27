import React from "react";
import {ListItem,ListInfo,LoadMore} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from '../store/index';
import {Link} from 'react-router-dom';

class List extends React.PureComponent{
    render() {
        const {articleList,getMoreList,page} = this.props;
        return (
            <div>
                {
                    articleList.map((item,index) => {
                        return (
                            <Link key={index} to={'/detail/' + item.get('id')}>
                            <ListItem >
                                <img className="list-pic"
                                     src={item.get('imgUrl')}
                                     alt="120"/>
                                <ListInfo>
                                    <h3  className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                            </Link>
                            )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
            </div>

        )
    }
}

const mapState = (state) => ({
    articleList:state.getIn(["home","articleList"]),
    page:state.getIn(['home','articlePage'])
});

const mapDispatch = (dispatch) => ({
    getMoreList(page){
        const action = actionCreators.getMoreList(page);
        dispatch(action);
    }
});

export default connect(mapState,mapDispatch)(List);