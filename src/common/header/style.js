import styled from "styled-components";
import logoPic from '../../static/logo.png';
import jianshudiamond from '../../static/简书砖.png';

export const HeaderWrapper = styled.div`
    position:relative;
    width:1400px;
    height:58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href:"/"
})`
    position:absolute;
    top:0;
    left:0;
    display:block;
    height:56px;
    width:100px;
    background:url(${logoPic});
    background-size:contain;
`;

export const Diamond = styled.a.attrs({
    href:"/"
})`
    height:25px;
    width:56.81px;
    background:url(${jianshudiamond});
    background-size:contain;
    float:right;
    margin-top:15px;
    margin-left:10px;
    margin-right:10px;
`;


export const Nav = styled.div`
    margin:0 auto;
    width:945px;
    height:58px;
`;

export const NavItem = styled.div`
    font-size:17px;
    line-height:56px;
    padding:0 15px;
    &.left{
        float:left
    }
    &.right{
        float:right;
        color:#969696
    }
    &.active{
        color:#e56f5a
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    background:#eeeeee;
    padding:0px 20px;
    box-sizing:border-box;
    border-radius:19px;
    border:none;
    margin-top:10px;
    margin-left:20px;
    font-size:14px;
    outline:none;
    &::placeholder{
        color:#999
    }
    &.focused{
        width:300px;
    }
    &.slide-enter{
        transition:all .4s ease-out;
    }
    &.slide-enter-active{
        width:260px;
    }
    &.slide-enter-done{
        width:260px;
    }
    &.slide-exit{
        transition:all .4s ease-out;
     }
     &.slide-exit-done{
        width:160px;
     }
     &.slide-exit-active{
        width:160px;
    }
`;

export const Addition = styled.div`
    position:absolute;
    height:58px;
    right:0;
    top:0;
`;

export const Button = styled.div`
    &.write{
        color:white;
        background-color:#ea6f5a;
    }
    &.register{
        
        color:#ea6f5a;
    }
    float:right;
    margin-top:9px;
    margin-right:20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ea6f5a;
    font-size:15px;
    padding:0 20px;
`;

export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff
        }
    }
`;

export const SearchInfo = styled.div`
    position:absolute;
    left:0px;
    padding:0 20px;
    top:59px;
    width:240px;
    color:#333333;
    background-color: #fff;
    box-shadow:0 0 8px rgb(0,0,0,.2)
`;

export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.a`
    float:right;
    font-size:13px;
    color:#969696;
    background-color:transparent;
    cursor:pointer;
    .spin{
        display:block;
        font-size:12px;
        float:left
        margin-right:2px;
        transition:all .2s ease-in;
        transform-origin:center center;
    }
`;

export const SearchInfoItem = styled.a`
    padding: 0px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    display:block;
    float:left;
    line-height:20px;
    margin-right:10px;
    margin-bottom:15px;
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;