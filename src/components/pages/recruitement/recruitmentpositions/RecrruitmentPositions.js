
import React, { Component } from 'react'
import RecruitmentPositionSelector from './recruitmentpositionselector/RecruitmentPositionSelector';
import './RecruitmentPositions.css';

export class RecrruitmentPositions extends Component {

    constructor(props){
        super(props)
        this.state={
            positionsListed: 'all',
            positions:
                [
                        {
                            type:'mechanical',
                            name:'General Mechanical Member',
                            description:'learn the process of manufacturing carbon fibre composite components through vacuum infusion process',
                            openings: '10'
                        }, 
                        {
                            type:'electrical',
                            name:'General Electrical Member',
                            description:'V = IR',
                            openings: '10'
                        },  
                        {
                            type:'software',
                            name:'General Software Member',
                            description:'Something something something',
                            openings: '10'
                        },
                        {
                            type:'mechanical',
                            name:'Composites Manufacturing',
                            description:'learn the process of manufacturing carbon fibre composite components through vacuum infusion process',
                            openings: '3'
                        },
                        {
                            type:'mechanical',
                            name: 'Cad (Computer Aided Design)',
                            description:'learn the process of manufacturing carbon fibre composite components through vacuum infusion process',
                            openings: '5'
                        },
                        {
                            type:'mechanical',
                            name: 'Structural Analysis',
                            description:'learn the process of manufacturing carbon fibre composite components through vacuum infusion process',
                            openings: '1'
                        },
                    {
                        type:'electrical',
                        name:'Wiring Harness',
                        description:'learn the process of manufacturing carbon fibre composite components through vacuum infusion process',
                        openings: '2'
                    },        
                    {
                        type:'software',
                        name:'Controls Tester',
                        description:'blah blah ssksnskns',
                        openings: '10'
                    },
                    // {
                    //     type:'business',
                    //     name:'Event Organizer',
                    //     description:'Something something something',
                    //     openings: '1'
                    // }
                ]
                               
                
        }
    }

    updatePositionsVisible=(newPositions) => {
        this.setState({positionsListed: newPositions})
    }



    render() {

        var stations = [
            {call:'station one',frequency:'000'},
            {call:'station two',frequency:'001'}
        ];

        const Test = 
            <div>
              {stations.map(station => (
                <div className="station" key={station.call}>
                    <h1>
                        {station.call}
                    </h1>
                </div>
              ))}
            </div>
          ; 

        const  visiblePosition = this.state.positions.filter(position => position.type== this.state.positionsListed || this.state.positionsListed === 'all');

          const positions = 
            <div className="positions-section-container">
                <div className="positions-container">
                    {visiblePosition.map(position => (
                            <div className="position-container">
                                <div className="position">
                                    <div className="position-title-container">
                                        <h1 className="position-title">{position.name}</h1>
                                    </div>
                                    <div className="position-openings-container">
                                        <h2 className="position-opening-title">openings: </h2>
                                        <h1 className="position-openings">{position.openings}</h1>
                                    </div>
                                    <div className="position-description-container">
                                        <p className="position-description"> {position.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    
                </div>
            </div>;


        if(visiblePosition.length === 0) 
        {
            return (
                <div>
                    <RecruitmentPositionSelector 
                    positionsListed={this.state.positionsListed}
                    updatePositionsVisible={this.updatePositionsVisible}
                    />
                    <div className="no-positions-container">
                        <h1 className="no-positions-header">
                            No open positions available at this time.
                        </h1>
                    </div>
                </div>
            )
        }               
        return (
            <div>
                <RecruitmentPositionSelector 
                positionsListed={this.state.positionsListed}
                updatePositionsVisible={this.updatePositionsVisible}
                />
                {positions}
            </div>
        )
    }
}

export default RecrruitmentPositions
