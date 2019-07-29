import React, { Component } from 'react';
import './index.scss'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let {commentData} =this.props;
        return (
            <>
                {
                    commentData.map(item => (
                        <ol key={item.id} className='anonym'>
                            <li><p>匿名用户</p><span>{item.add_time}</span></li>
                            <li>{item.content}</li>
                        </ol>
                    ))
                }
            </>
        );
    }
}

export default index;