import React, { Component } from 'react'
import Header from "../../../../components/header/index"
import { inject, observer } from "mobx-react"
import "./index.scss"
import CommentItem from '../../../../components/commentItem/index'
import BS from "better-scroll"
@inject("pages")
@observer
class Allcomment extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        const { match: { params: { id } } } = this.props
        this.props.pages.getCommentList_data({ valueId: id, typeId: 0, size: 100, pages: 1 })
        new BS(this.refs.comment_box, {
            probeType: 3
        })
    }
    componentDidUpdate(prevProps, prevState) {

    }

    render() {
        let { commentListData } = this.props.pages
        return (
            <div className="wrap">
                <Header {...this.props} data={'常看更多评论'}></Header>
                <div className="comment_box" ref="comment_box">
                    <div>
                        {
                            commentListData.map((item, index) => {
                                console.log(item)
                                return <CommentItem {...this.props} data={item} key={item.id}></CommentItem>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Allcomment
