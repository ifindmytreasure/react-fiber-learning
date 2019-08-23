import React from "react";
import {WriterWrapper, WriterItem, WriterSwitch, WriterInfo} from "../style";


class Writer extends React.Component{
    render() {
        return (
            <WriterWrapper>
                <span className='writer'>推荐作者</span>
                <WriterSwitch>
                    <i className="iconfont spin">&#xe851;</i>
                    换一批</WriterSwitch>
                <WriterItem>
                    <img className="writer-img"
                         src="https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                         alt="120"/>
                    <WriterInfo>
                        <p  className='title'>卢璐说</p>
                        <p className='desc'>写了1202.7k字 · 25.1k喜欢</p>
                    </WriterInfo>
                </WriterItem>
            </WriterWrapper>
        )
    }
}

export default Writer;