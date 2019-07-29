import React, { Component } from 'react'
import Header from "../../../../components/header/"
import { inject, observer } from "mobx-react"
import "./index.scss"
@inject('pages')
@observer
class BrandDetil extends Component {
    componentDidMount() {
        const { match: { params: { id } } } = this.props
        this.props.pages.getBrandDetail_data(id)
    }
    render() {
        let { brandDetail } = this.props.pages
        return (
            <div className="wrap noTabPageContent">
                <Header data={brandDetail.name} {...this.props} />
                <div className="brandDetail">
                    <img className="imgLazyload" alt="imgLazyLoad" src={brandDetail.list_pic_url} />
                    <div className="breadDesc">{brandDetail.simple_desc}</div>
                </div>

            </div >
        )
    }
}
export default BrandDetil;
