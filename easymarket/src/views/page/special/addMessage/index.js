import React, { Component } from 'react';
import Header from "../../../../components/header"

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='wrap'>
                <Header {...this.props} data={"填写留言"} />
                <section>
                <textarea></textarea>
                </section>
            </div>
        );
    }
}

export default index;