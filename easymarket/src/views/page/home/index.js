import React, { Component } from 'react'
import Footer from '../../../components/footer'
import { MapRouter } from '../../../router/index'

import './index.scss'

class Home extends Component {
    render() {
        return (
            <div className='wrap'>
                <MapRouter route={this.props.route} />
                <Footer {...this.props} />
            </div>
        )
    }
}
export default Home
