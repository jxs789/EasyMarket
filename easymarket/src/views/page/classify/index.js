import React, { Component } from 'react'
import './index.scss'

class Classify extends Component {
    render() {
        return (
            <section className='classify'>
                <div className='classify_head'>
                    <p>搜索商品，共239款好物</p>
                </div>
                <div className='classify_count'>
                    <ul className='classify_left'>
                        <li className="active">居家</li>
                        <li>居家</li>
                        <li>居家</li>
                    </ul>
                    <div className='classify_right'>
                        <img src="http://yanxuan.nosdn.127.net/e8bf0cf08cf7eda21606ab191762e35c.png" alt=""/>
                        <span>回家，放松身心</span>
                        <p>- 居家分类 -</p>
                        <div className='right_box'>
                            <dl>
                                <dt><img src="http://yanxuan.nosdn.127.net/e8bf0cf08cf7eda21606ab191762e35c.png" alt=""/></dt>
                                <dd>烦烦烦</dd>
                            </dl>
                            <dl>
                                <dt><img src="http://yanxuan.nosdn.127.net/e8bf0cf08cf7eda21606ab191762e35c.png" alt=""/></dt>
                                <dd>烦烦烦</dd>
                            </dl>
                            <dl>
                                <dt><img src="http://yanxuan.nosdn.127.net/e8bf0cf08cf7eda21606ab191762e35c.png" alt=""/></dt>
                                <dd>烦烦烦</dd>
                            </dl>
                            <dl>
                                <dt><img src="http://yanxuan.nosdn.127.net/e8bf0cf08cf7eda21606ab191762e35c.png" alt=""/></dt>
                                <dd>烦烦烦</dd>
                            </dl>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
export default Classify
