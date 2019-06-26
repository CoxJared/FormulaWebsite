import React, { Component } from 'react';
import Header from '../layout/header/Header';
import TeamGallery from '../layout/teamgallery/TeamGallery';
import TeamMembers from '../layout/teammembers/TeamMembers';
import MemberSectionPicker from '../layout/membersectionpicker/MemberSectionPicker';

export class Team extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div>
                <Header />
                <TeamGallery />
                <MemberSectionPicker />
                <TeamMembers />
            </div>
        )
    }
}

export default Team
