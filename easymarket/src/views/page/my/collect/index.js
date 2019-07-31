import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

@inject("my") //注入模块
@observer 

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>我的收藏</div>
        );
    }
    componentDidMount(){
        this.props.my.get_Collect(1)
    }
}

export default index;