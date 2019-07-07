import React, { Component } from 'react';
import Header from '../../layout/header/Header';
import TeamGallery from './teamgallery/TeamGallery';
import TeamMembers from './teammembers/TeamMembers';
import MemberSectionPicker from './membersectionpicker/MemberSectionPicker';

import Footer from './../../layout/footer/Footer';

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
                <Footer />
            </div>
        )
    }
}

export default Team
