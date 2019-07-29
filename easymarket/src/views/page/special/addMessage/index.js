import React, { Component } from 'react';
import Header from "../../../../components/header"
import './index.scss'
import { Button, Toast } from 'antd-mobile';
import { inject, observer } from 'mobx-react'

@inject('special')
@observer

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            num: 80
        };
    }
    render() {
        console.log(this.props)
        const { value, num } = this.state;
        return (
            <div className='wrap'>
                <Header {...this.props} data={"填写留言"} />
                <section className='addmessage'>
                    <div className='inp'>
                        <textarea value={value} onChange={(e) => this.setState({ value: e.target.value })} maxLength={num} autoFocus />
                        <span>{value.length}/{num}</span>
                    </div>
                    <div className='btn'>
                        {
                            value.length ? <Button onClick={() => this.empty()}>清空</Button> : null
                        }
                        <p></p>
                        <Button type="primary" onClick={() => this.addtext()}>留言</Button>
                    </div>
                </section>
            </div >
        );
    }
    empty = () => {
        this.setState({
            value: ''
        })
    }
    addtext = () => {
        let { value } = this.state;
        if (value) {
            Toast.loading('Loading...', 1, () => {
                this.props.special.add_Message({
                    content: value,
                    typeId: 1,
                    valueId: this.props.match.params.id
                })
                this.props.history.goBack()
            });
        } else {
            Toast.fail('请输入内容!', 1);
        }

    }
}

export default index;