import React, { Component } from 'react';
import MemberSectionPicker from './membersectionpicker/MemberSectionPicker';
import LeadershipMembers2019 from './teammembers/leadership/LeadershipMembers2019';
import MechanicalMembers2019 from './teammembers/mechanical/MechanicalMembers2019';
import ElectricalMembers2019 from './teammembers/electrical/ElectricalMembers2019';
import BusinessMembers2019 from './teammembers/business/BusinessMembers2019';

const sectionComponenet = {
    leadership: <LeadershipMembers2019 />,
    mechanical: <MechanicalMembers2019 />,
    electrical: <ElectricalMembers2019 />,
    business: <BusinessMembers2019 />

}



export class Team2019 extends Component {
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

export default Team2019
