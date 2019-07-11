import React, { Component } from 'react';
import Header from '../../layout/header/Header';
import TeamGallery from './teamgallery/TeamGallery';
import TeamMembers from './teammembers/TeamMembers';
import MemberSectionPicker from './membersectionpicker/MemberSectionPicker';

import Footer from './../../layout/footer/Footer';
import MemberPage from './memberpage/MemberPage';
import TeamTitle from './teamtitle/TeamTitle';

export class Team extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div>
                <Header />
                <TeamTitle />
                <MemberSectionPicker />
                <TeamMembers />
                <Footer />
            </div>
        )
    }
}

export default Team
