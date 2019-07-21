import React, { Component } from 'react'
import InfoSelector from './infoselector/InfoSelector';
import RecruitmentEvents from './recruitmentevents/RecruitmentEvents';
import WhyJoin from './whyjoin/WhyJoin';

export class RecruitmentInfo extends Component {

    constructor(props) {
        super(props)
        this.state={
            infoPage: 'why-join'
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      } 

    updateInfo = (newInfo) => {
        this.setState({infoPage: newInfo})
        console.log("new-info", newInfo)
        console.log(this.state.infoPage)
    }

    render() {
        if(this.state.infoPage === "why-join")
        {
        return (
            <div>
                <InfoSelector 
                info={this.state.infoPage}
                updateInfo={this.updateInfo}/>
                <WhyJoin />
            </div>
        )
        } 
        return (
            <div>
                <InfoSelector 
                info={this.state.infoPage}
                updateInfo={this.updateInfo}/>
                <RecruitmentEvents />
            </div>
        )
    }
}

export default RecruitmentInfo
