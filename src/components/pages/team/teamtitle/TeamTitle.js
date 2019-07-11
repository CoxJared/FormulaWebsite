import React, { Component } from 'react';
import './TeamTitle.css';

export class TeamTitle extends Component {
    render() {
        return (
            <div className="team-title-container">
                <h1 className="title-heading">Our <span className="title-span">Team</span></h1>
            </div>
        )
    }
}

export default TeamTitle
