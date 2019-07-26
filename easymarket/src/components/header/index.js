import React, { Component } from 'react';
import './index.scss'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
let data=this.props.data;
        return (
            <header>
                <p onClick={() => this.gotoBack()}>&lt;</p>
                <p>{data}</p>
                <p></p>
            </header>
        );
    }
    gotoBack = () => {
        this.props.history.goBack()
    }
}

export default index;