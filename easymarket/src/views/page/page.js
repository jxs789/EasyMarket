import React, { Component } from 'react'
import ReactSwiper from "react-swipe
import "./page.css"
class Page extends Component {
    render() {
        let opt = {
            auto: 1000
            // autoplay: true
        };
        return (
            <div className="page" >
                <main className="main">
                    <div className="imgBox">
                        <ReactSwiper swipeOptions={opt}>
                            {/* <div className="silde">
                            <img
                                src="http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg"
                                alt=""
                            />
                        </div>
                        <div className="slide">
                            <img
                                src="http://pic31.nipic.com/20130705/9527735_231540074000_2.jpg"
                                alt=""
                            />
                        </div> */}
                        </ReactSwiper>
                    </div>
                </main>
                <Footer />
            </div >
        )
    }
}

