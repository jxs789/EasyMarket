import React, { Component } from 'react';
import './index.scss'
import { Icon } from 'antd-mobile';
import { observer, inject } from "mobx-react"
import { Toast } from 'antd-mobile';
import GoodsList from '../../../../components/goodsList'

@inject("classify")
@observer

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            flag: true,
            mask: true,
        };
    }
    componentDidMount() {
        this.props.classify.get_Search()
        this.props.classify.get_Keyword()
    }

    handelChange = (e) => {
        this.setState({
            value: e.target.value
        })
        if (!this.state.value) {
            this.setState({
                flag: true
            })
        }
    }
    handelSearch = (e) => {
        if (e.target.value) {
            this.props.classify.get_Keyword(this.state.value)
        }
        if (e.keyCode === 13) {
            if (this.state.value) {
                this.props.classify.getGood_data({ keyword: this.state.value })
            } else {
                Toast.fail('请输入内容!', 1);
            }
        }
    }
    //删除
    del = () => {
        this.setState({
            mask: false
        })
        this.props.classify.del_History()
    }

    //下面
    gotogoods = () => {
        if (this.state.value) {
            this.props.classify.getGood_data({ keyword: this.state.value })
        }
    }
    //取消
    cancel = () => {
        this.setState({
            value: '',
            flag: true
        })
    }
    //点击热门点击历史
    addKeyword = (value) => {
        this.setState({
            value,
            flag: true
        })
        this.props.classify.getGood_data({ keyword: value })
    }

    render() {
        let { searchData: { defaultKeyword, historyKeywordList, hotKeywordList }, keywordData, goodlistData } = this.props.classify;
        let { value, flag, mask } = this.state;
        return (
            <div className='wrap'>
                <header>
                    <p onClick={() => this.props.history.goBack()}>&lt;</p>
                    <div>
                        <Icon type="search" size='xs' color='#666' />
                        {
                            <input type="text"
                                value={value}
                                onChange={(e) => this.handelChange(e)}
                                onKeyDown={(e) => this.handelSearch(e)}
                                placeholder={defaultKeyword && defaultKeyword.keyword} />
                        }
                    </div>
                    <span onClick={() => this.cancel(keywordData)}>取消</span>
                </header>
                <section className='seach_count'>
                    {
                        value ?
                            <div className='show' style={flag ? { display: 'block' } : { display: 'none' }}>
                                <div className='mask'>
                                    {
                                        keywordData.map((item, index) => (
                                            <p key={index} onClick={() => this.gotogoods()}>{item}</p>
                                        ))
                                    }
                                </div>
                                <div className='nav_box'>
                                    <span>综合</span>
                                    <span>价格<i className='iconfont icon-paixu2'></i></span>
                                    <span>全部分类</span>
                                </div>
                                <div className='mask_box'>
                                    <p>全部</p>
                                    <p>居家</p>
                                </div>
                                <div className='goods_box'>
                                    {
                                        goodlistData && goodlistData.map(item => (
                                            <GoodsList key={item.id} {...item} />
                                        ))
                                    }
                                </div>
                            </div>
                            : <div style={flag ? { display: 'block' } : { display: 'none' }} >
                                <div className='seach_past' style={mask ? { display: 'none' } : { display: 'block' }}>
                                    <ul>
                                        <li>历史记录</li>
                                        <li className='iconfont icon-lajitong' onClick={() => this.del()}></li>
                                    </ul>
                                    <ol>
                                        {
                                            historyKeywordList && historyKeywordList.map((item, index) => (
                                                <li key={index} onClick={() => this.addKeyword(item)}>{item}</li>
                                            ))
                                        }
                                    </ol>
                                </div>
                                <div className='search_hot'>
                                    <ul>
                                        <li>热门搜索</li>
                                        <li></li>
                                    </ul>
                                    <ol>
                                        {
                                            hotKeywordList && hotKeywordList.map((item, index) => (
                                                <li key={index} className={item.is_hot ? 'active' : null}
                                                    onClick={() => this.addKeyword(item.keyword)}>{item.keyword}</li>
                                            ))
                                        }
                                    </ol>
                                </div>
                            </div>
                    }
                </section>
            </div>
        );
    }

    handelChange = (e) => {
        this.setState({
            value: e.target.value
        })
        if (!this.state.value) {
            this.setState({
                flag: true
            })
        }
    }
    handelSearch = (e) => {
        if (e.target.value) {
            this.props.classify.get_Keyword(this.state.value)
        }
        if (e.keyCode === 13) {
            if (this.state.value) {
                this.props.classify.getGood_data({ keyword: this.state.value })
            } else {
                Toast.fail('请输入内容!', 1);
            }
        }
    }
    //删除
    del = () => {
        this.setState({
            mask: false
        })
        this.props.classify.del_History()
    }

    //下面
    gotogoods = () => {
        if (this.state.value) {
            this.props.classify.getGood_data({ keyword: this.state.value })
        }
    }
    //取消
    cancel = () => {
        this.setState({
            value: '',

        })
        this.props.classify.getGood_data({ keyword: this.state.value })
    }
    //点击热门点击历史
    addKeyword = (value) => {
        this.setState({
            value,
            flag: true
        })
        this.props.classify.getGood_data({ keyword: value })
    }
}

export default index;