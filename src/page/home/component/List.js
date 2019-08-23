import React from "react";
import {ListItem,ListInfo} from '../style';
import {connect} from 'react-redux';

class List extends React.Component{
    render() {
        const {articleList} = this.props;
        return (
            <div>
                {
                    articleList.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img className="list-pic"
                                     src={item.get('imgUrl')}
                                     alt="120"/>
                                <ListInfo>
                                    <h3  className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                            )
                    })
                }
            </div>

        )
    }
}

const mapState = (state) => ({
    articleList:state.getIn(["home","articleList"])
});

export default connect(mapState,null)(List);