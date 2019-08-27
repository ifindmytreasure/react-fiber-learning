import axios from 'axios';
import * as actionTypes from './actionTypes';

export const logout = () =>({
    type:actionTypes.LOGOUT,
    value:false
});


const changeLogin = () => ({
    type:actionTypes.CHANGE_LOGIN,
    value:true
})
export const login = (account,password) => {
    return (dispatch) => {
        console.log(account,password);
        axios.get('api/login.json?account=' + account + '&password=' + password)
            .then(
                (res) => {
                    const result = res.data.data;
                    if (result){
                        dispatch(changeLogin());
                    }
                }
            ).catch(
            () => {
                console.log('未访问到数据')
            }
        )
    }
};