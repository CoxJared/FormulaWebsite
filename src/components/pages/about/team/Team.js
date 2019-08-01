import React, { Component } from 'react';
import MemberSectionPicker from './membersectionpicker/MemberSectionPicker';
import rileyshot from './../../../../img/headshots/riley.jpg';
import scottShot from './../../../../img/headshots/scott.jpg';
import jessieShot from './../../../../img/headshots/jessie.jpg';
import blaireShot from './../../../../img/headshots/blaire.jpg';
import andrewShot from './../../../../img/headshots/andrew.jpg';
import dylanShot from './../../../../img/headshots/dylan.jpg';
import harjotshot from './../../../../img/headshots/harjot.jpg';
import jaredShot from './../../../../img/headshots/me.jpg';
import gramshot from './../../../../img/headshots/gram-headshot.jpeg';
import brianShot from './../../../../img/headshots/brian-headshot.jpg';
import noahShot from './../../../../img/headshots/noah-headshot.jpg';
import patriciaShot from './../../../../img/headshots/patricia-headshot.jpg';
import donShot from './../../../../img/headshots/don-headshot.jpg';
import nathanshot from './../../../../img/headshots/nathan-headshot.jpg';
import hemelShot from './../../../../img/headshots/hemel-headshot.jpg';
import parsaShot from './../../../../img/headshots/parsa-headshot.jpg';
import lawrenceShot from './../../../../img/headshots/lawrence-headshot.jpg';
import samShot from './../../../../img/headshots/sam-headshot.jpg';
import ridvanShot from './../../../../img/headshots/ridvan-headshot.jpg';
import samuelShot from './../../../../img/headshots/samuel-photo.jpg';
import greshot from './../../../../img/headshots/greg-headshot.jpg';
import justingshot from './../../../../img/headshots/justin-headshot.jpg';
import dharakShot from './../../../../img/headshots/dharak-headshot.jpg';
import jacksonShot from './../../../../img/headshots/jackson-headshot.jpg';
import alecShot from './../../../../img/headshots/alec-headshot.jpg';
import mattfShot from './../../../../img/headshots/mattf-headshot.jpg';

import './TeamMembers.scss';
import TeamMember from './TeamMember';


export class Team2019 extends Component {
    constructor (props) {
        super(props);
        this.state= {
            section: "leadership",
            showMember: <div></div>,
            members: [
                {id: 1,
                    name: 'Jackson Diebel',
                    seasons:{'2018':{section: 'leadership', title: 'Team Captain'}},
                    email:"jacksondiebel@gmail.com",
                    headshot: jacksonShot,
                    links:[{name:"linkedin", url:"https://www.linkedin.com/in/jacksondiebel/"}],
                    projects:[{year:"2018", projectsForYear:["PowerTrain Development", "Chassis Development"]}]},
                {id: 1,
                    name: 'Sam Jantzi',
                    seasons:{'2018':{section: 'leadership', title: 'Mechanical Captain'}},
                    email:"samjantzi@live.com",
                    headshot: samShot,
                    links:[{name:"linkedin", url:"https://www.linkedin.com/in/samueljantzi/"}],
                    projects:[{year:"2018", projectsForYear:["PowerTrain Development"]}]},
                {id: 1,
                    name: 'Graeme Cox',
                    seasons:{'2018':{section: 'leadership', title: 'Electrical Captain'}},
                    email:"Graeme.k.cox@gmail.com",
                    headshot: gramshot,
                    links:[{name:"linkedin", url:"https://www.linkedin.com/in/graemekcox/"}],
                    projects:[ {year:"2018",projectsForYear:["PCB Design","Low Voltage Wiring","Board Programming"]}]},
                {id: 1,
                    name: 'Alec Taraborrelli',
                    seasons:{'2018':{section: 'leadership', title: 'Electrical Captain'}},
                    email:"alec.taraborrelli@gmail.com",
                    headshot: alecShot,
                    links:[{name:"linkedin", url:"https://www.linkedin.com/in/taraborrelli/"}],
                    projects:[ {year:"2018",projectsForYear:["High Voltage Accumulator: Mechanical Enclosure and Electrical Configuration","Aerodynamics Design Lead","Inverter Enclosure Design/Low Voltage Enclosures"]}]},
                {id: 1, 
                    name: 'Brian Wong',
                    seasons:{'2018':{section: 'leadership', title: 'Electrical Captain'}},
                    email:"t.brianwong@gmail.com",
                    headshot: brianShot,
                    links:[],
                    projects:[{year:"2018",projectsForYear:[ "Driving Simulator"]}]},
                {id: 1, 
                    name: 'Matt Franceschini',
                    seasons:{'2018':{section: 'leadership', title: 'Mechanical Captain'}},
                    email:"franceschinimatt@gmail.com",
                    headshot: mattfShot,
                    links:[{name:"linkedin", url:'https://www.linkedin.com/in/francemj/'}],
                    projects:[{year:"2018",projectsForYear:[ "Project management", "Website maintenance"]}]},
                {id: 1,
                    name: 'Riley Dunn',
                    seasons:{'2019':{section: 'leadership', title: 'Team Captain'}},
                    email:"dunnrw@mcmaster.ca",
                    headshot: rileyshot,
                    links:[{name:"linkedin", url:"https://www.linkedin.com/in/riley-dunn-94860bb2/"}],
                    projects:[{year:"2019",projectsForYear:["Team Management","Composites Lead"]}]},
                {id: 3,
                    name: 'Jessie Boudreau',
                    seasons:{'2019':{section: 'leadership', title: 'Electrical Captain'},'2020':{section: 'leadership', title: 'Team Captain'}},
                    email:"boudrj1@mcmaster.ca",
                    headshot: jessieShot,
                    links:[{name:"linkedin", url:"https://www.linkedin.com/in/jessie-boudreau-46203ba5/"}],
                    projects:[{year:"2019",projectsForYear:["Powertrain Lead","Accumulator Assembly","Inverter Assembly"]}]},
                {id: 2,
                    name: 'Scott Sutherland',
                    seasons:{'2019':{section: 'leadership', title: 'Electrical Captain'},'2020':{section: 'leadership', title: 'Electrical Captain'},},
                    email:"suthes1@mcmaster.ca",
                    headshot: scottShot,
                    links:[{name:"linkedin", url:"https://www.linkedin.com/in/suthes1/"}],
                    projects:[{year:"2019", projectsForYear:["General Low Voltage Lead", "Body Control Module","HV Circuitry"]}]},
                {id: 3,
                    name: 'Jared Cox',
                    seasons:{'2019':{section: 'mechanical', title: 'Freelancer'},'2020':{section: 'leadership', title: 'Mechanical Captain'} },
                    email:"coxj1@mcmaster.ca",
                    headshot: jaredShot,
                    links:[ {name:"linkedin", url:"https://www.linkedin.com/in/jared-cox-110591149/"},{name:"github", url:"https://github.com/CoxJared"}],
                    projects:[{year:"2019",projectsForYear:["Aero-Pack Manufacturing","LV Wiring Harness", "Website Development"]}]},
                {id: 5,
                    name: 'Dylan Boudreau',
                    seasons:{'2019':{section: 'mechanical', title: 'Suspension'},'2020':{section: 'leadership', title: 'Mechanical Captain'}},
                    email:"boudread@mcmaster.ca",
                    headshot:dylanShot,
                    links:[],
                    projects:[{year:"2019", projectsForYear:["Suspension Lead","Vehicle Dynamics"]}]},
                {id: 1,
                    name: 'Noah Mrjvelj',
                    seasons:{'2019':{section: 'mechanical', title: 'Freelancer'}},
                    email:"mrveljn@mcmaster.ca",
                    headshot: noahShot,
                    links:[{name:"linkedin", url:"https://www.linkedin.com/in/noah-mrvelj-3094b6173/"}],
                    projects:[{year:"2019", projectsForYear:[ "Invertor/Charger Kevlar Housings", "Chassis", "Vinyl Wrap"]}]}, 
                {id: 1,
                    name: 'Samuel Prasad',
                    seasons:{'2019':{section: 'mechanical', title: 'Manufacturing'}},
                    email:"prasas2@mcmaster.ca",
                    headshot: samuelShot,
                    links:[{name:"instagram", url:"https://www.instagram.com/samuelprasad98/"}],
                    projects:[{year:"2019", projectsForYear:["Welding jobs", "Carbon rims research", "Aero manufacturing"]}]},  
                {id: 1,
                    name: 'Patricia Ostrowski',
                    seasons:{'2019':{section: 'mechanical', title: 'Manufacturing'}},
                    email:"ostrowsp@mcmaster.ca",
                    headshot: patriciaShot,
                    links:[{name:"linkedin", url:"http://linkedin.com/in/patriciaostrowski"}],
                    projects:[ {year:"2019", projectsForYear:["Pre-preg manufacturing process research", "PCB housing", "Undertray mounts"]}]},  
                {id: 6,
                    name: 'Ridvan Song',
                    seasons:{'2019':{section: 'mechanical', title: 'Freelancer'}},
                    email:"songt7@mcmaster.ca",
                    headshot: ridvanShot,
                    links:[{name:"linkedin", url:"www.linkedin.com/in/ridvansong"}],
                    projects:[{year:"2019", projectsForYear:["Aero Package: simulations and manufacturing", "Accumulator", "Inverter Housing"]}]},
                {id: 1,
                    name: 'Nathan Lam',
                    seasons:{'2019':{section: 'mechanical', title: 'Manufacturing'}},
                    email:"royh@mcmaster.ca",
                    headshot: nathanshot,
                    links:[{name:"linkedin", url:"http://linkedin.com/in/patriciaostrowski"}],
                    projects:[{year:"2019",projectsForYear:["Chassis Contruction", "Miscellaneous welding tasks" ]}]},  
                {id: 1,
                    name: 'Greg Butler',
                    seasons:{'2019':{section: 'mechanical', title: 'Cooling'}},
                    email:"butleg@mcmaster.ca",
                    headshot: greshot,
                    links:[{name:"linkedin", url:"http://linkedin.com/in/patriciaostrowski"}],
                    projects:[{year:"2019",projectsForYear:["Cooling system for motors and inverters" ]}]},   
                {id: 1,
                    name: 'Justin Isenberg-Verrall',
                    seasons:{'2019':{section: 'mechanical', title: 'Driver Input'}},
                    email:"Isenberj@mcmaster.ca",
                    headshot: justingshot,
                    links:[{name:"linkedin", url:"https://www.linkedin.com/in/justin-isenberg-verrall-b567a0149/"}],
                    projects:[{year:"2019",projectsForYear:["Driver input: seat, wheel, pedal-tray", "Driver Gear" ]}]},  
                {id: 1,
                    name: 'Hemel Roy',
                    seasons:{
                        '2019':{section: 'electrical', title: 'Embedded Systems'}
                    },
                    email:"Lamn7@mcmaster.ca",
                    headshot: hemelShot,
                    links:[{name:"linkedin", url:"https://www.linkedin.com/in/hemelroy"}, {name:"github", url:"https://github.com/hemelroy"}],
                    projects:[{year:"2019",projectsForYear:["Microcontroller programming", "CAN bus and python modules for raspberry pi"]}]}, 
                {id: 1,
                    name: 'Don Trung Hieu',
                    seasons:{'2019':{section: 'electrical', title: 'MicroControllers'} },
                    email:"dont1@mcmaster.ca",
                    headshot: donShot,
                    links:[{name:"linkedin", url:"https://www.linkedin.com/in/hieudon"}],
                    projects:[ {year:"2019",projectsForYear:["Embedded Systems for microcontrollers, C programming", "Serial communication program UART and SPI for the microcontroller", "Communicated with the gyroscope, accelerometer using SPI"]}]},          
                {id: 4,
                    name: 'Blaire Pauli',
                    seasons:{'2019':{section: 'leadership', title: 'Mechanical Captain'}, '2020':{section: 'leadership', title: 'Mechanical Captain'}},
                    email:"paulib@mcmaster.ca",
                    headshot:blaireShot,
                    links:[],
                    projects:[{year:"2019",projectsForYear:["Chassis Lead", "Waterjet Lead"]}]},
                {id: 6,
                    name: 'Harjot Nijjar',
                    seasons:{'2019':{section: 'leadership', title: 'Electrical Captain'},'2020':{section: 'leadership', title: 'Electrical Captain'}},
                    email:"nijjarhs@mcmaster.ca",
                    headshot: harjotshot,
                    links:[],
                    projects:[{year:"2019", projectsForYear:["Controls Lead", "Driving Simulator"]}]},
                {
                    id: 5,
                    name: 'Andrew Aslanidis',
                    seasons:{'2019':{section: 'leadership', title: 'Mechanical Captain'}},
                    email:"aslanida@mcmaster.ca",
                    headshot:andrewShot,
                    links:[],
                    projects:[{year:"2019",projectsForYear:["Technical Drawings", "Aerodynamics"]}]},
                {id: 6,
                    name: 'Parsa Beheshti',
                    seasons:{'2019':{section: 'electrical', title: 'Tractive System'}},
                    email:"beheshtp@mcmaster.ca",
                    headshot: parsaShot,
                    links:[{name:"linkedin", url:"https://www.linkedin.com/in/beheshtipar"},{name:"github",url:"https://www.github.com/beheshtipar"}],
                    projects:[{year:"2019", projectsForYear:["Sponsorship package re-design", "Accumulator Management System (AMS)"]}]},
                {id: 6,
                    name: 'Lawrence Chung',
                    seasons:{'2019':{section: 'electrical', title: 'Dashboard'}},
                    email:"chungl1@mcmaster.ca",
                    headshot: lawrenceShot,
                    links:[{name:"linkedin", url:"https://www.linkedin.com/in/lawrence-chung-51abb0111/"}],
                    projects:[{year:"2019", projectsForYear:["Custom dashboard"]}]},
                {id: 6,
                    name: 'Dharak Verma',
                    seasons:{'2019':{section: 'electrical', title: 'Microcontrollers'}},
                    email:" vermad1@mcmaster.ca",
                    headshot: dharakShot,
                    links:[{name:"linkedin", url:"https://www.linkedin.com/in/vermad1"}],
                    projects:[{year:"2019", projectsForYear:["Embedded C libraries for PWM cooling fan/pump control", "Serial communication program UART and SPI for the microcontroller"]}]},    
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
                season={this.props.season}
                /> 
            })
    }
    closeTeam = () =>{
        this.setState({showMember:<div></div>})
    }
    
    render() {

        if(this.props.season !== '2019' & this.state.section !=='leadership'){
            this.setState({section: 'leadership'})
        }

        const visibleMembers = this.state.members.filter(member => {
            try{ return member.seasons[this.props.season].section === this.state.section }
            catch{ return false }}
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
                                    <h2 className="title">{member.seasons[this.props.season].title}</h2>
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
