import React, { Component } from 'react';
import MemberSectionPicker from './membersectionpicker/MemberSectionPicker';
import rileyshot from './../../../../img/headshots/riley.jpg';
import scottShot from './../../../../img/headshots/scott.png';
import jessieShot from './../../../../img/headshots/jessie.png';
import blaireShot from './../../../../img/headshots/blaire.png';
import andrewShot from './../../../../img/headshots/andrew.png';
import dylanShot from './../../../../img/headshots/dylan.png';
import harjotshot from './../../../../img/headshots/harjot.png';
import jaredShot from './../../../../img/headshots/me.jpg';

import './TeamMembers.scss';


export class Team2019 extends Component {
    constructor (props) {
        super(props);
        this.state= {
            section: "leadership",
            members: [
                {
                    id: 1,
                    name: 'Riley Dunn',
                    title: 'Team Captain',
                    section:'leadership',
                    season:'2019',
                    headshot: rileyshot
                },
                {
                    id: 2,
                    name: 'Scott Sutherland',
                    title: 'Electrical Captain',
                    section: 'leadership',
                    season:'2019',
                    headshot: scottShot
                },
                {
                    id: 3,
                    name: 'Jessie Boudreau',
                    title: 'Electrical Captain',
                    section: 'leadership',
                    season:'2019',
                    headshot: jessieShot
                },
                {
                    id: 4,
                    name: 'Blaire Pauli',
                    title: 'Mechanical Captain',
                    section: 'leadership',
                    season:'2019',
                    headshot:blaireShot
                },
                {
                    id: 5,
                    name: 'Andrew Aslanidis',
                    title: 'Mechanical Captain',
                    section: 'leadership',
                    season:'2019',
                    headshot:andrewShot
                },
                {
                    id: 6,
                    name: 'Harjot Nijjar',
                    title: 'Electrical Captain',
                    section: 'leadership',
                    season:'2019',
                    headshot: harjotshot
                },
                {
                    id: 1,
                    name: 'Jessie Boudreau',
                    title: 'Team Captain',
                    section:'leadership',
                    season:'2020',
                    headshot: jessieShot
                },
                {
                    id: 2,
                    name: 'Scott Sutherland',
                    title: 'Electrical Captain',
                    section: 'leadership',
                    season:'2020',
                    headshot: scottShot
                },
                {
                    id: 3,
                    name: 'Jared Cox',
                    title: 'Mechanical Captain',
                    section: 'leadership',
                    season:'2020',
                    headshot: jaredShot
                },
                {
                    id: 4,
                    name: 'Blaire Pauli',
                    title: 'Mechanical Captain',
                    section: 'leadership',
                    season:'2020',
                    headshot:blaireShot
                },
                {
                    id: 5,
                    name: 'Dylan boudreau',
                    title: 'Mechanical Captain',
                    section: 'leadership',
                    season:'2020',
                    headshot:dylanShot
                },
                {
                    id: 6,
                    name: 'Harjot Nijjar',
                    title: 'Electrical Captain',
                    section: 'leadership',
                    season:'2020',
                    headshot: harjotshot
                }
            ]
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    updateSection = (newSection) => {
        this.setState({section: newSection})
    }
    
    render() {

        const visibleMembers = this.state.members.filter(member => 
            member.section === this.state.section &
            member.season === this.props.season
        )

        return (
            <div>
                <MemberSectionPicker 
                season={this.props.season}
                section={this.state.section}
                updateSection={this.updateSection}
                />
                <div className="width-restricter-team">
                    <div className="members-container">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        {visibleMembers.map(member =>(
                            <div className="member-container">
                                <div className="member">
                                    <img className="headshot"src={member.headshot} alt="" /> 
                                    <h1 className="name">{member.name}</h1>
                                    <h2 className="title">{member.position}</h2>
                                    <div className="links-container">
                                        <ul className="links-list">
                                            <li className="linkedin"><a href="#" class="fa fa-linkedin"></a></li> 
                                            <li className="github"><a href="#" class="fa fa-github"></a></li> 
                                            <li className="twitter"><a href="#" class="fa fa-twitter"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Team2019
