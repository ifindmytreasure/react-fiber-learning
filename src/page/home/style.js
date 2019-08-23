import styled from "styled-components";

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;
export const HomeLeft = styled.div`
    width:625px;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
`;
export const HomeRight = styled.div`
    width:280px;
    float:right;
`;

export const TopicWrapper = styled.div`
    padding:15px 2px 20px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    padding-right:10px;
    float:left;
    background:#f7f7f7;
    height:32px;
    font-size:14px;
    margin-left:18px;
    color:#000;
    line-height:32px;
    border:1px solid #dcdcdc;
    border-radius:4px;
    margin-top:10px;
    .topic-pic{
        margin-right:10px;
        display:block;
        float:left;
        width:32px;
        height:32px;
    }
`;

export const ListItem = styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .list-pic{
        display:block;
        float:right;
        width:150px;
        height:100px;
    }
`;

export const ListInfo = styled.div`
    width:475px;
    float:left;
    margin-top:-20px;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        font-size:13px;
        line-height:24px;
        color:#999999;
    }
`;

export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`;

export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background-image:url(${(props) => props.imgUrl});
    background-size:contain;
    margin-bottom:8px;
`;

export const WriterWrapper = styled.div`
    width:278px;
    border:1px solid #dcdcdc;
    height:295px;
    line-height:295px;
    text-align:center;
    overflow:hidden;
    .writer{
        position:relative;
        top:-135px;
        float:left;
        font-size:14px;
        color:#969696;
    }
`;

export const WriterItem = styled.div`
    color:#333333;
    margin:20px 0;
    width:278px;
    height:47px;
    .writer-img{
        position:relative;
        left:-55px;
        width:48px;
        height:48px;
        float:left;
        border-radius:24px;
    }
`;

export const WriterSwitch =styled.div`
    position:relative;
    float:right;
    font-size:14px;
    color:#969696;
    background-color:transparent;
    cursor:pointer;
    top:-135px;
    .spin{
        display:block;
        float:left
        margin-right:2px;
        transition:all .2s ease-in;
        transform-origin:center center;
    }
`;

export const WriterInfo = styled.div`
    width:230px;
    height:47px;
    float:left:
    font-size:14px;
    color:#333333;
    text-align:left;
    .desc{
        font-size:12px;
        color:#969696;
        position:relative;
        
    }
`;