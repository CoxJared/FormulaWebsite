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
                    //     {
                    //         type:'electrical',
                    //         name:'General Electrical Member',
                    //         description:'V = IR',
                    //         openings: 'Sept 8, 2019'
                    //     },  
                    //     {
                    //         type:'software',
                    //         name:'General Software Member',
                    //         description:'Something something something',
                    //         openings: 'Sept 8, 2019'
                    //     },
                    //     {
                    //         type:'mechanical',
                    //         name:'Composites Manufacturing',
                    //         description:'learn the process of manufacturing carbon fibre composite components through vacuum infusion process',
                    //         openings: 'Sept 8, 2019'
                    //     },
                    //     {
                    //         type:'mechanical',
                    //         name: 'Cad (Computer Aided Design)',
                    //         description:'learn the process of manufacturing carbon fibre composite components through vacuum infusion process',
                    //         openings: 'Sept 8, 2019'
                    //     },
                    //     {
                    //         type:'mechanical',
                    //         name: 'Structural Analysis',
                    //         description:'learn the process of manufacturing carbon fibre composite components through vacuum infusion process',
                    //         openings: 'Sept 8, 2019'
                    //     },
                    // {
                    //     type:'electrical',
                    //     name:'Wiring Harness',
                    //     description:'learn the process of manufacturing carbon fibre composite components through vacuum infusion process',
                    //     openings: 'Sept 8, 2019'
                    // },        
                    // {
                    //     type:'software',
                    //     name:'Controls Tester',
                    //     description:'blah blah ssksnskns',
                    //     openings: 'Sept 8, 2019'
                    // },
                    // {
                    //     type:'business',
                    //     name:'Event Organizer',
                    //     description:'Something something something',
                    //     openings: '1'
                    // }
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
