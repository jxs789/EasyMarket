import React, { Component } from 'react'
import "./index.scss"
export default class CommentItem extends Component {
    render() {
        let { data } = this.props
        return (
            <div className='commentItem'>
                <div className='userInfo'>
                    <div>{data.name ? data.name : "匿名用户"}</div>
                    <div>{data.add_time}</div>
                </div>
                <div className='userComment'>{data.content}</div>
                <div className='commentPicList'>
                    {
                        data.pic_list && data.pic_list.length !== 0 ? data.pic_list.map((val, index) => {
                            return (<img src={val.pic_url} key={index + val.comment_id} />)
                        }) : null
                    }
                </div>
            </div>
        )
    }
}
