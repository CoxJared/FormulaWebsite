import React, { Component } from 'react'
import PositionSelector from './selector/PositionSelector';

import './Positions.css';

export class Positions extends Component {


    constructor(props)
    {
        super(props)
        this.state = {
            positionsListed:"all",
            positions:
                [
                        {
                            type:'mechanical',
                            name:'Aerodynamics Team Member',
                            description:[
                                {
                                    body:'Learn the fundamentals of aerodynamics, the study of airflow around the car and how it affects performance. Learn computer modelling and fluid simulations in addition to manufacturing composite components.'},
                                    
                                    {
                                        head:'Design:',
                                        body:' CAD (Computer Aided Design), FEA (Finite Element Analysis); '
                                    },{   
                                        head:'Simulation:',
                                        body:' Run simulations using CFD (Computational Fluid Dynamics) to optimize performance '
                                    },{
                                        head:'Manufacturing:',
                                        body:'Create Moulds and layup carbon composites to create components through a vacuum infusion process.'
                                    }
                                ],
                            responsibilities:["Create CAD(Computer Aided Design) Models of the aerodynamic components of the car", "Run Fluid Simulations, analyze and communicate the results","Create components out of Carbon Fibre Composites through a vacuum infusion process", "Create test plans to verify effectiveness of different components"],
                            skills:["none"],
                            openings: 'Sept 21, 2019',
                            applyLink: "#"
                            // background:aeroBackground
                        }, 
                        {
                            type:'mechanical',
                            name:'Chassis Team Member',
                            description:[
                                {
                                    body:'The chassis is the primary structure of the car and supports all functional vehicle systems. Joining the chassis subteam means you can get experience in many different areas of engineering.'
                                },
                                {
                                    head:'Designing:',
                                    body:' Using CAD, CAM and FEA; '
                                },{   
                                    head:'Manufacturing:',
                                    body:' Executing composite processes and machining parts; '
                                },{
                                    head:'Testing:',
                                    body:' Using a tensile machine and preparing custom test set-ups.'
                                },{
                                    body:' The chassis team is unique because it exposes you to the other systems of the car and how they all connect.'
                                }
                            ],
                            responsibilities:["Design new chassis geometry using CAD and FEA", "Perform 3-point bend tests and shear tests on carbon fibre samples", "Create moulds for creating composite components", "Work with other subteams to assure cohesion with other components of the car", "Prepare important documents for competition", "Seek sponsorships from companies", "Develop new prepreg composite processes and documentation", "Use hand tools","Welding"],
                            skills:["none"],
                            openings: 'Sept 21, 2019',
                            applyLink: "#"
                            // background:aeroBackground
                        }, 
                        {
                            type:'business',
                            name:'Social Media Manager',
                            description:[
                                {
                                    body:'As a Social Media Manager, we expect you to be up-to-date with the latest digital technologies and social media trends. You should have excellent communication skills and be able to express our team\'s views creatively.'
                                },
                                {
                                    body:'We are looking for a talented social media manager to administer our social media accounts. You will be responsible for creating original text and video content, managing posts and responding to followers. You will manage our team image in a cohesive way to achieve our marketing goals.'
                                },
                                {
                                    body:'Ultimately, you should be able to handle our social media presence ensuring high levels of web traffic and follower engagement.'
                                }
                            ],
                            responsibilities:["Perform research on current benchmark trends and audience preferences", "Design and implement social media strategy to align with business goals","Set specific objectives and report on ROI", "Generate, edit, publish and share engaging content daily(e.g. original text, photos, videos and news)", "Manage commitments to sponsors regarding social media posts", "Monitor SEO and web traffic metrics", "Collaborate with other teams, like marketing, engineering and sponsorship to generate content and ensure brand consistency", "Communite with followers, respond to queries in a timely manner", "Oversee social media accounts' design(e.g Facebook timeline cover, profile pictures and blog layout)", "Suggest and implement new features to develop brand awareness, like promotions and competitions", "Stay up-to-date with current technologies and trends in social media, design tools and applications"],
                            skills:["none"],
                            openings: 'Sept 21, 2019',
                            applyLink: "#"
                            // background:aeroBackground
                        },
                ]   
        }
    }

    updatePositions = (newPositions)=>{
        this.setState({positionsListed:newPositions})
    }


    updatePositionsVisible=(newPositions) => {
        this.setState({positionsListed: newPositions})
    }

    render() {

        const  visiblePosition = this.state.positions.filter(position => position.type=== this.state.positionsListed || this.state.positionsListed === 'all');

        const positions = 
        <div className="positions-section-container">
                <div className="positions-container">
        {visiblePosition.map(position => (
            <div className="position-container" >
                <div className="position" onClick={this.props.updatePositionPage.bind(this, position)}>
                    <div className="position-title-container">
                        <h1 className="position-title">{position.name}</h1>
                    </div>
                    <div className="position-openings-container">
                        <h2 className="position-opening-title">Closing: </h2>
                        <h1 className="position-openings">{position.openings}</h1>
                    </div>
                    <div className="position-description-container">
                        <p className="position-description"> {position.description[0].body}</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
        </div>





        return (
            <div>
                <PositionSelector updatePosition={this.updatePositions} positions={this.state.positionsListed}/>
                {positions}
            </div>

        )
    }
}

export default Positions
