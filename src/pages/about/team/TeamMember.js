import React, {Component} from 'react';
import './TeamMember.css';
import ImageLoader from './../../../components/imageloader/ImageLoader';

export class TeamMember extends Component {
    render(){
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div className="member-popup-container-full-screem" onClick={this.props.closeMember} />
                <div className="member-popup-container">
                    <div className="member-popup-left-container">
                        <div className="member-popup-left-image-container">
                            <img src={this.props.member.headshot} className="member-popup-left-image"alt="headshot"></img>
                        </div>
                        <div className="member-popup-left-email-container">
                            <h1 className="member-popup-left-email">{this.props.member.email}</h1>
                        </div>
                        <div className="member-popup-left-links-container">
                            <div className="member-poup-left-links">            
                                    {this.props.member.links.map(link => ( 
                                <a href={link.url} className={`fa fa-${link.name} custom-${link.name} smaller`} target="_blank" rel="noopener noreferrer" />
                                ))}
                            </div>
                        </div>      
                    </div>
                    <div className="member-popup-right-container">
                        <div className="member-popup-right-name-container">
                            <h1 className="member-popup-right-name">{this.props.member.name}</h1>
                        </div>
                        <div className="member-popup-right-title-container">
                            <h1 className="member-popup-right-title">{this.props.member.seasons[this.props.season].title}</h1>
                        </div>
                        <div className="member-popup-right-experience-container">

                            {this.props.member.projects.map(projectYear => (
                                <div>
                                    <h1 className="member-popup-right-experience-title">Projects</h1>
                                    <h1 className="member-popup-right-experience-title-year">{projectYear.year}</h1>
                                    {projectYear.projectsForYear.map(project => (
                                        <>
                                            <h2 className="member-popup-right-experience-item">- {project}</h2>
                                        </>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="member-popup-close-button" onClick={this.props.closeMember}>
                        <div className="member-popup-close-button-line1" />
                        <div className="member-popup-close-button-line2" />
                    </button>
                </div>
            </div>
        )
    }
}

export default TeamMember
