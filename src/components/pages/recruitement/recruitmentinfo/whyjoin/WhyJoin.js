import React, { Component } from 'react';
import WhyJoinShowcase from './whyjoinshowcase/WhyJoinShowcase';
import './WhyJoin.css';

export class WhyJoin extends Component {
    render() {
        return (
            <div className="why-join-container">
                <WhyJoinShowcase />
                <div className="showbox">
                    {/* <h1 className="discover-passion-header">Discover your passion</h1> */}
                    <div className="why-join-intro-paragraph-container">
                    <p className="why-join-intro-paragraph">
                    &emsp;MAC Formula Eletric is always interested in enthusiastic young engineers who are looking to apply their knowledge to a real world engineeering problem. If you are a student at Mcmaster University wanting to learn the ins and outs of high performance motorsports, then come join a group of like-minded individuals trying to push the bondaries of electric vehicle technology. 
                    </p>
                    </div>
                    <div className="why-join-intro-paragraph-container">
                    <p className="why-join-intro-paragraph">
                    &emsp; By joining Mac Formula Electric you will be shown processes and manufacturing techniques that you may not have otherwise had a chance to see.  This includes material analyses and production of composite components, standard processes used elsewhere in aviation and aerospace.  Custom PCBs(Printed Circuit Boards) designed, assembled and tested in house.  Design and testing of a CAN bus communications network used heavily in the automotive industry.  And a 600V, 138 lithium-ion cell Accumulator developed and assembled by our team.  In addition, you will be meeting representitives from a variety of industries interested in the exact skills you will be gaining.  Shoot us an email and see how we can get you involved!
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhyJoin
