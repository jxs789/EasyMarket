import React, { Component } from 'react';
import Header from "../../../../components/header"
import Comments from '../../../../components/comments'
import './index.scss'
import { inject, observer } from 'mobx-react'

@inject('special')
@observer

class index extends Component {
    render() {
        let { commentData } = this.props.special;
        return (
            <div className='wrap'>
                <Header {...this.props} data={"查看更多评论"} />
                <section>
                    <Comments {...this.props} commentData={commentData} />
                </section>
            </div>
        );
    }
    componentDidMount() {
        this.props.special.get_Comment(this.props.match.params.id, 1)
    }
}

export default index;