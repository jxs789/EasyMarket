import React, { Component } from 'react';
import './index.scss'
import Header from '../../../../components/header'
import { inject, observer } from 'mobx-react'

@inject('special')
@observer

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { detailData } = this.props.special;
        console.log(detailData)
        return (
            <div className='wrap'>
                <Header {...this.props} />
                <section>
                    <div dangerouslySetInnerHTML={{ __html: detailData.content }} className="topical_detail_main"></div>
                    <ul className='message'>
                        <li><p>精选留言</p><p>⚔</p></li>
                    </ul>
                    <ol className='anonym'>
                        <li><p>梵蒂冈梵蒂冈的</p><span>454545454</span></li>
                        <li>撒旦发射点</li>
                    </ol>
                </section>
            </div>
        );
    }
    componentDidMount() {
        this.props.special.get_Detail(this.props.match.params.id)
        this.props.special.get_Comment(this.props.match.params.id, 1)
    }
}

export default index;