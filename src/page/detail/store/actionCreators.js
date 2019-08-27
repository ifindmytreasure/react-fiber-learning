import axios from 'axios';
import * as actionTypes from './actionTypes';


const changeDetail = (result) => ({
    type:actionTypes.CHANGE_DETAIL,
    title:result.title,
    description:result.description,
    content:result.content
});

export const getDetailAction = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then(
            (res) => {
                const result = res.data.data;
                dispatch(changeDetail(result))
            }
        ).catch(() => {
            console.error("未获取到数据");
        })
    }
}
