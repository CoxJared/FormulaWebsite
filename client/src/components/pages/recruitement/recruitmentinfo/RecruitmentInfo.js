import React, { Component } from '../../../../../node_modules/react'
import InfoSelector from './infoselector/InfoSelector';

export class RecruitmentInfo extends Component {

    constructor(props) {
        super(props)
        this.state={
            infoPage: 'why-join'
        }
    }

    updateInfo = (newInfo) => {
        this.setState({infoPage: newInfo})
        console.log("new-info", newInfo)
        console.log(this.state.infoPage)
    }

    render() {
        return (
            <div>
                <InfoSelector 
                info={this.state.infoPage}
                updateInfo={this.updateInfo}/>
            </div>
        )
    }
}

export default RecruitmentInfo
