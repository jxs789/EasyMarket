import React, { Component } from 'react'
import './index.scss'
import { Toast } from 'antd-mobile';

class My extends Component {
    constructor() {
        super()
        this.state = {
            list: [{
                name: '我的收藏',
                icon: 'iconfont icon-wenjianjia',
                id: 0,
                link: '/collect'
            }, {
                name: '地址管理',
                icon: 'iconfont icon-weizhi',
                id: 1,
                link: '/address'
            }, {
                name: '我的订单',
                icon: 'iconfont icon-icon--copy-copy',
                id: 2
            }, {
                name: '周末拼单',
                icon: 'iconfont icon-rili',
                id: 3
            }, {
                name: '优惠券',
                icon: 'iconfont icon-youhuiquan',
                id: 4
            }, {
                name: '优选购',
                icon: 'iconfont icon--',
                id: 5
            }, {
                name: '我的红包',
                icon: 'iconfont icon-hongbao',
                id: 6
            }, {
                name: '会员plus',
                icon: 'iconfont icon-vip',
                id: 7
            }, {
                name: '邀请返利',
                icon: 'iconfont icon-desadanshi',
                id: 8
            }, {
                name: '意见反馈',
                icon: 'iconfont icon-yijian',
                id: 9
            }, {
                name: '客服咨询',
                icon: 'iconfont icon-a069',
                id: 10
            }, {
                name: '账户安全',
                icon: 'iconfont icon-anquan',
                id: 11
            }]
        }
    }
    render() {
        let { list } = this.state
        return (
            <section className='my_wrap'>
                <dl className='my_head'>
                    <dt><img src="http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt="" /></dt>
                    <dd>
                        <p>{localStorage.getItem('userinfo')}</p>
                        <span>普通用户</span>
                    </dd>
                </dl>
                <div className='my_count'>{
                    list.map(item => (
                        <dl key={item.id} onClick={() => this.handelClick(item)}>
                            <dt className={item.icon} style={item.link ? { color: '#2196F3' } : null}></dt>
                            <dd style={item.link ? { color: '#2196F3' } : null}>{item.name}</dd>
                        </dl>
                    ))
                }
                </div>
                <div className='exit_btn'>
                    <button onClick={()=>this.props.history.push('/login')}>退出登录</button>
                </div>
            </section>
        )
    }
    handelClick = (item) => {
        if (item.link) {
            this.props.history.push(`${item.link}`)
        } else {
            Toast.offline(`${item.name}功能还未解锁，请耐心等候~`, 1);
        }
    }
}
export default My
