import React, { Component } from 'react'
import noCheck from "../../static/img/noCheck.png"
import isCheck from "../../static/img/isCheck.png"
import "./index.scss"
class IsCheckItem extends Component {
    render() {
        let { iFlag } = this.props
        return (

            <div className="isCheckItem" onClick={(e) => this.props.click(e)}>
                <div>
                    <img src={iFlag == 1 ? isCheck : noCheck} alt="" />
                </div>
            </div>

        )
    }
}
export default IsCheckItem
