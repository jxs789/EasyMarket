import React, { Component } from 'react';
import './index.scss'
import Header from '../../../../components/header'
import Comments from '../../../../components/comments'
import { inject, observer } from 'mobx-react'
import Special from '../index.js'
import { NavLink } from 'react-router-dom'


@inject('special')
@observer

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { detailData, commentData, relatedData } = this.props.special;
        let data = this.props.location.state.params.title
        // console.log()
        return (
            <div className='wrap'>
                <Header {...this.props} data={data} />
                <section className='specialdetail'>
                    <div dangerouslySetInnerHTML={{ __html: detailData.content }} className="topical_detail_main"></div>
                    <ul className='message'>
                        <li><p>精选留言</p><NavLink to={`/addMessage/${this.props.match.params.id}`}>⚙</NavLink></li>
                    </ul>
                    <Comments {...this.props} commentData={commentData} />
                    <div className='more'><NavLink to={`/more/${this.props.match.params.id}`} >查看更多评论</NavLink></div>
                    <div className='recommend'>推荐专题</div>
                    <div className='specials'>
                        <Special {...this.props} recommend={relatedData} />
                    </div>
                </section>
            </div>
        );
    }
    componentDidMount() {
        let page = 1;
        let size = 5;
        this.props.special.get_Detail(this.props.match.params.id)
        this.props.special.get_Comment(this.props.match.params.id, 1, page, size)
        this.props.special.get_Related(this.props.match.params.id)
    }
}

export default index;