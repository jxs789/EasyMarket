import React, { Component } from 'react'
import './index.scss'
import { observer, inject } from "mobx-react"
import { NavLink } from 'react-router-dom'

@inject("classify")
@observer
// @inject("pages")
// @observer

class Classify extends Component {
    constructor() {
        super()
        this.state = {
            ind: 0
        }
    }
    componentDidMount() {
        this.props.classify.get_Classify()
        this.props.classify.get_Right(1005000)
    }
    tab = (ind, id) => {
        this.setState({
            ind
        })
        this.props.classify.get_Right(id)
    }

    render() {
        let { classify: { rightData, classifyData: { categoryList } } } = this.props;
        let { ind } = this.state;
        return (
            <section className='classify'>
                <div className='classify_head'>
                    <p>搜索商品，共239款好物</p>
                </div>
                {
                    <div className='classify_count'>
                        <div className='count_small'>
                            <ul className='classify_left'>{
                                categoryList && categoryList.map((item, index) => (
                                    <li key={item.id} onClick={() => this.tab(index, item.id)} className={ind === index ? 'active' : null}>{item.name}</li>
                                ))
                            }
                            </ul>
                            <div className='classify_right'>
                                {
                                    <>
                                        <div className='count_top' style={{ background: `url(${rightData.currentCategory && rightData.currentCategory.banner_url})` }}>{rightData.currentCategory && rightData.currentCategory.front_name}</div>
                                        <p>---- {rightData.currentCategory && rightData.currentCategory.name} ----</p>
                                        <div className='right_box'>
                                            {rightData.currentCategory && rightData.currentCategory.subCategoryList.map(item => (
                                                <NavLink to={`/channelClassify/${item.id}`} key={item.id}>
                                                    <dl>
                                                        <dt><img src={item.wap_banner_url} alt="" /></dt>
                                                        <dd>{item.name}</dd>
                                                    </dl>
                                                </NavLink>
                                            ))}

                                        </div>
                                    </>
                                }
                            </div>
                        </div>

                    </div>
                }
            </section>
        )
    }
}
export default Classify
