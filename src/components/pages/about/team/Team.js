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
import gramshot from './../../../../img/headshots/gram-headshot.jpeg';

import './TeamMembers.scss';
import TeamMember from './TeamMember';


export class Team2019 extends Component {
    constructor (props) {
        super(props);
        this.state= {
            section: "leadership",
            showMember: <div></div>,
            members: [
                {
                    id: 1,
                    name: 'Graeme Cox',
                    title: "Electrical Captain",
                    section:'leadership',
                    email:"placeholder@blah.com",
                    season:'2018',
                    headshot: gramshot,
                    links:[{
                        name:"linkedin", url:"https://www.linkedin.com/in/graemekcox/"
                    }],
                    projects:[
                        {year:"2018",
                        projectsForYear:[
                            "not sure"
                        ]}
                    ]
                },
                {
                    id: 1,
                    name: 'Riley Dunn',
                    title: 'Team Captain',
                    section:'leadership',
                    email:"placeholder@blah.com",
                    season:'2019',
                    headshot: rileyshot,
                    links:[],
                    projects:[
                        {year:"2019",
                        projectsForYear:[
                            "Team Management","Composites Lead"
                        ]}
                    ]
                },
                {
                    id: 2,
                    name: 'Scott Sutherland',
                    title: 'Electrical Captain',
                    section: 'leadership',
                    email:"placeholder@blah.com",
                    season:'2019',
                    headshot: scottShot,
                    links:[{
                        name:"linkedin", url:"https://www.linkedin.com/in/suthes1/"
                    }],
                    projects:[
                        {year:"2019",
                        projectsForYear:[
                            "Body Control Module Lead","HV Circuitry"
                        ]}
                    ]
                },
                {
                    id: 3,
                    name: 'Jessie Boudreau',
                    title: 'Electrical Captain',
                    section: 'leadership',
                    email:"placeholder@blah.com",
                    season:'2019',
                    headshot: jessieShot,
                    links:[{
                        name:"linkedin", url:"https://www.linkedin.com/in/jessie-boudreau-46203ba5/"
                    }],
                    projects:[
                        {year:"2019",
                        projectsForYear:[
                            "Powertrain Lead","Accumulator Assembly","Inverter Assembly"
                        ]}
                    ]
                },
                {
                    id: 4,
                    name: 'Blaire Pauli',
                    title: 'Mechanical Captain',
                    section: 'leadership',
                    email:"placeholder@blah.com",
                    season:'2019',
                    headshot:blaireShot,
                    links:[],
                    projects:[
                        {year:"2019",
                        projectsForYear:[
                            "Chassis Lead", "Waterjet Lead"
                        ]}
                    ]
                },
                {
                    id: 5,
                    name: 'Andrew Aslanidis',
                    title: 'Mechanical Captain',
                    section: 'leadership',
                    email:"placeholder@blah.com",
                    season:'2019',
                    headshot:andrewShot,
                    links:[],
                    projects:[
                        {year:"2019",
                        projectsForYear:[
                            "Aerodynamics Lead"
                        ]}
                    ]
                },
                {
                    id: 6,
                    name: 'Harjot Nijjar',
                    title: 'Electrical Captain',
                    section: 'leadership',
                    email:"placeholder@blah.com",
                    season:'2019',
                    headshot: harjotshot,
                    links:[],
                    projects:[
                        {year:"2019",
                        projectsForYear:[
                            "Controls Lead", "Driving Simulator"
                        ]}
                    ]
                },
                {
                    id: 1,
                    name: 'Jessie Boudreau',
                    title: 'Team Captain',
                    section:'leadership',
                    email:"placeholder@blah.com",
                    season:'2020',
                    headshot: jessieShot,
                    links:[{
                        name:"linkedin", url:"https://www.linkedin.com/in/jessie-boudreau-46203ba5/"
                    }],
                    projects:[
                        {year:"2019",
                        projectsForYear:[
                            "Powertrain Lead","Accumulator Assembly","Inverter Assembly"
                        ]}
                    ]
                },
                {
                    id: 2,
                    name: 'Scott Sutherland',
                    title: 'Electrical Captain',
                    section: 'leadership',
                    email:"placeholder@blah.com",
                    season:'2020',
                    headshot: scottShot,
                    links:[{
                        name:"linkedin", url:"https://www.linkedin.com/in/suthes1/"
                    }],
                    projects:[
                        {year:"2019",
                        projectsForYear:[
                            "Body Control Module Lead","HV Circuitry"
                        ]}
                    ]
                },
                {
                    id: 3,
                    name: 'Jared Cox',
                    title: 'Mechanical Captain',
                    section: 'leadership',
                    email:"placeholder@blah.com",
                    season:'2020',
                    headshot: jaredShot,
                    links:[{
                        name:"linkedin",
                        url:"https://www.linkedin.com/in/jared-cox-110591149/"
                    }],
                    projects:[
                        {year:"2019",
                        projectsForYear:[
                            "Aero-Pack Manufacturing","LV Wiring Harness", "Website Development"
                        ]}
                    ]
                },
                {
                    id: 4,
                    name: 'Blaire Pauli',
                    title: 'Mechanical Captain',
                    section: 'leadership',
                    email:"placeholder@blah.com",
                    season:'2020',
                    headshot:blaireShot,
                    links:[],
                    projects:[
                        {year:"2019",
                        projectsForYear:[
                            "Chassis Lead"
                        ]}
                    ]
                },
                {
                    id: 5,
                    name: 'Dylan boudreau',
                    title: 'Mechanical Captain',
                    section: 'leadership',
                    email:"placeholder@blah.com",
                    season:'2020',
                    headshot:dylanShot,
                    links:[],
                    projects:[
                        {year:"2019",
                        projectsForYear:[
                            "Suspension Lead","Vehicle Dynamics"
                        ]}
                    ]
                },
                {
                    id: 6,
                    name: 'Harjot Nijjar',
                    title: 'Electrical Captain',
                    section: 'leadership',
                    email:"placeholder@blah.com",
                    season:'2020',
                    headshot: harjotshot,
                    links:[],
                    projects:[
                        {year:"2019",
                        projectsForYear:[
                            "Controls Lead", "Driving Simulator"
                        ]}
                    ]
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

    shouldShowTeam = (showMember) => {
                this.setState({showMember: 
                <TeamMember 
               member={showMember}
                closeMember={this.closeTeam}
                /> 
            })
    }
    closeTeam = () =>{
        this.setState({showMember:<div></div>})
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
                            <div className="member-container" onClick={this.shouldShowTeam.bind(this,member)}>
                                <div className="member">
                                    <img className="headshot"src={member.headshot} alt="" /> 
                                    <h1 className="name">{member.name}</h1>
                                    <h2 className="title">{member.title}</h2>
                                    <div className="links-container">
                                        <ul className="links-list">
                                            {member.links.map(link => (
                                            // eslint-disable-next-line jsx-a11y/anchor-has-content
                                            <li className={`${link.name}`}><a href={link.url} class="fa fa-linkedin smaller" target="_blank" rel="noopener noreferrer"></a></li> 
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {this.state.showMember}
                
                
            </div>
        )
    }
}

export default Team2019
