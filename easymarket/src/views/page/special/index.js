import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import "./index.scss"

@inject('special')
@observer

class special extends Component {
    render() {
        let { specialData } = this.props.special;
        console.log(specialData)
        return (
            <section>{
                specialData && specialData.map(item => (
                    <dl key={item.id} onClick={() => this.gotoDetail(item.id,item.title)}>
                        <dt><img src={item.scene_pic_url} alt="" /></dt>
                        <dd>
                            <h4>{item.title}</h4>
                            <p>{item.subtitle}</p>
                            <span>{item.price_info}元起</span>
                        </dd>
                    </dl>
                ))
            }
            </section>
        )
    }
    componentDidMount() {
        this.props.special.get_special()
    }
    gotoDetail = (id,title) => {
        this.props.history.push(`/specialDetail/${id}`,{params:{title}})
    }
}

export default special
