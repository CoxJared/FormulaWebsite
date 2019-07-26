import React, { Component } from 'react';
import './TeamMember.css';

export class TeamMember extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="member-popup-container-full-screem" onClick={this.props.closeMember}>
                    
                </div>
                <div className="member-popup-container">
                        <div className="member-popup-left-container">
                            <div className="member-popup-left-image-container">
                                <img src={this.props.member.headshot} className="member-popup-left-image"/>
                            </div>
                            <div className="member-popup-left-email-container">
                                <h1 className="member-popup-left-email">{this.props.member.email}</h1>
                            </div>
                            <div className="member-popup-left-links-container">
                            <div className="member-poup-left-links">            
                                    {this.props.member.links.map(link => ( 




                                <a href={link.url} class={`fa fa-${link.name} smaller`} target="_blank" rel="noopener noreferrer"></a>

                                ))}
                            </div>

                            {/* <ul className="links-list">
                                            
                                            // eslint-disable-next-line jsx-a11y/anchor-has-content
                                            <li className=><a href={link.url} class="fa fa-linkedin smaller" target="_blank" rel="noopener noreferrer"></a></li> 
                                           
                            </ul> */}





                            </div>
                            
                        </div>
                        <div className="member-popup-right-container">
                            <div className="member-popup-right-name-container">
                                <h1 className="member-popup-right-name">{this.props.member.name}</h1>
                            </div>
                            <div className="member-popup-right-title-container">
                                <h1 className="member-popup-right-title">{this.props.member.title}</h1>
                            </div>
                            <div className="member-popup-right-experience-container">
                                <h1 className="member-popup-right-experience-title">2019 projects</h1>
                                <h2 className="member-popup-right-experience-item">-Finalize Accumulator Design</h2>
                                <h2 className="member-popup-right-experience-item">-Accumulator Assembly</h2>
                                <h2 className="member-popup-right-experience-item">-Inverter Assembly</h2>
                            </div>
                            {/* <div className="member-popup-right-skills-container">
                                <h1 className="member-popup-right-skills-title">2019</h1>
                                <h2 className="member-popup-right-skills-item">- skill stuff</h2>
                            </div> */}
                        </div>
                        <button className="member-popup-close-button" onClick={this.props.closeMember}>
                            <div className="member-popup-close-button-line1">
                                </div>
                                <div className="member-popup-close-button-line2">
                                </div>
                                </button>
                </div>
            </div>
        )
    }
}

export default TeamMember
