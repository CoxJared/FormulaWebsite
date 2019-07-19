import React, { Component } from '../../../../../../node_modules/react';
import MemberSectionPicker from './membersectionpicker/MemberSectionPicker';
import LeadershipMembers2019 from './teammembers/leadership/LeadershipMembers2020';

const sectionComponenet = {
    leadership: <LeadershipMembers2019 />
}



export class Team2020 extends Component {
    constructor (props) {
        super(props);
        this.state= {
            section: "leadership"
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    updateSection = (newSection) => {
        this.setState({section: newSection})
    }
    
    render() {
        return (
            <div>
                <MemberSectionPicker 
                section={this.state.section}
                updateSection={this.updateSection}
                />
                {sectionComponenet[this.state.section]}
                </div>
        )
    }
}

export default Team2020
