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
import brianShot from './../../../../img/headshots/brian-headshot.png';
import noahShot from './../../../../img/headshots/noah-headshot.jpg';
import patriciaShot from './../../../../img/headshots/patricia-headshot.jpg';
import donShot from './../../../../img/headshots/don-headshot.jpg';
import nathanshot from './../../../../img/headshots/nathan-headshot.png';

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
                            "PCB Design",
                            "Low Voltage Wiring",
                            "Board Programming"
                        ]}
                    ]
                },
                {
                    id: 1,
                    name: 'Brian Won',
                    title: "Electrical Captain",
                    section:'leadership',
                    email:"t.brianwong@gmail.com",
                    season:'2018',
                    headshot: brianShot,
                    links:[
                    ],
                    projects:[
                        {year:"2018",
                        projectsForYear:[
                            "Driving Simulator"
                        ]}
                    ]
                },
                {
                    id: 3,
                    name: 'Jared Cox',
                    title: 'Freelancer',
                    section: 'mechanical',
                    email:"coxj1@mcmaster.ca",
                    season:'2019',
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
                    id: 1,
                    name: 'Noah Mrjvelj',
                    title: "Freelancer",
                    section:'mechanical',
                    email:"mrveljn@mcmaster.ca",
                    season:'2019',
                    headshot: noahShot,
                    links:[{name:"linkedin", url:"https://www.linkedin.com/in/noah-mrvelj-3094b6173/"}
                    ],
                    projects:[
                        {year:"2019",
                        projectsForYear:[
                            "Invertor/Charger Kevlar Housings", "Chassis", "Vinyl Wrap"
                        ]}
                    ]
                }, 
                {id: 1,
                    name: 'Patricia Ostrowski',
                    title: "Freelancer",
                    section:'mechanical',
                    email:"ostrowsp@mcmaster.ca",
                    season:'2019',
                    headshot: patriciaShot,
                    links:[{name:"linkedin", url:"http://linkedin.com/in/patriciaostrowski"}],
                    projects:[
                        {year:"2019",
                        projectsForYear:[
                            "Pre-preg manufacturing process research", "PCB housing", "Undertray mounts"
                ]}]},  
                {id: 1,
                    name: 'Nathan Lam',
                    title: "Manufacturing",
                    section:'mechanical',
                    email:"Lamn7@mcmaster.ca",
                    season:'2019',
                    headshot: nathanshot,
                    links:[{name:"linkedin", url:"http://linkedin.com/in/patriciaostrowski"}],
                    projects:[
                        {year:"2019",
                        projectsForYear:[
                            "Chassis Contruction", "Miscellaneous welding tasks"
                ]}]},   
                {id: 1,
                    name: 'Don Trung Hieu',
                    title: "Microcontrollers",
                    section:'electrical',
                    email:"dont1@mcmaster.ca",
                    season:'2019',
                    headshot: donShot,
                    links:[{name:"linkedin", url:"https://www.linkedin.com/in/hieudon"}],
                    projects:[
                        {year:"2019",
                        projectsForYear:["Embedded Systems for microcontrollers, C programming", "Serial communication program UART and SPI for the microcontroller", "Communicated with the gyroscope, accelerometer using SPI"
                        ]}]},              
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
                    email:"coxj1@mcmaster.ca",
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
                            "Chassis Lead", "Waterjet Lead"
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
