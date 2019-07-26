import React, { Component } from 'react';
import './index.scss'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        return (
            <header>
                <p onClick={() => this.gotoBack()}>&lt;</p>
                <p>{this.props.location.state.params.title}</p>
                <p></p>
            </header>
        );
    }
    gotoBack = () => {
        this.props.history.goBack()
    }
}

export default index;