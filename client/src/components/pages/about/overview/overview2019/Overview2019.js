import React, { Component } from '../../../../../../node_modules/react';
import './Overview2019.css';

export class Overview2019 extends Component {
    render() {
        return (
            <div className="overiew-2019-container">
                <div className="overview-2019-intro">
                <div className="overview-2019-intro-title-container">
                        <h1 className="overview-2019-intro-title">Season Review</h1>
                    </div>
                    <div className="overview-2019-intro-image-container">
                    <div className="overview-2019-intro-image"></div>
                    </div>
                    <div className="overview-20190-intro-paragraph-container">
                        <p className="overview-20190-intro-paragraph">
                            Through the completion of this season we have...</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overview2019
