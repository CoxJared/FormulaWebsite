import React, { Component } from 'react';
import './TeamGallery.css';
import TeamPhoto from './../../../../img/team-photo.png';

export class TeamGallery extends Component {
    render() {
        return (
            <div className="gallery">
                <img className = "image" src={TeamPhoto} alt="team-photo"/>     
            </div>
        )
    }
}

export default TeamGallery
