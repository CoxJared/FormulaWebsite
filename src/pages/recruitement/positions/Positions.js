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
                            type:['mechanical'],
                            name:'Aerodynamics',
                            description:[
                                {   body:'Learn the fundamentals of aerodynamics, the study of airflow around the car and how it affects performance. Learn computer modelling and fluid simulations in addition to manufacturing composite components.'},
                                {   head:'Design:',
                                    body:' CAD (Computer Aided Design), FEA (Finite Element Analysis)'},
                                {   head:'Simulation:',
                                    body:' Run simulations using CFD (Computational Fluid Dynamics) to optimize performance'},
                                {   head:'Manufacturing:',
                                    body:' Create Moulds and layup carbon composites to create components through a vacuum infusion process'}],
                            lists:[
                                {   name:'Responsibilities',
                                    text:["Create CAD(Computer Aided Design) Models of the aerodynamic components of the car", "Run Fluid Simulations, analyze and communicate the results","Create components out of Carbon Fibre Composites through a vacuum infusion process", "Create test plans to verify effectiveness of different components"],},
                                {   name:"Skills Needed",
                                    text:["The team needs people with different skill backgrounds so don’t be discouraged if you don’t have any relevant experience!"]}],
                            openings: 'Sept 21, 2019',
                            applyLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HcudP17cNU8BHgDGFRZepf_xUQkRaVkw4QU83RldRSklQN0ZON0UyTDZaUCQlQCN0PWcu"
                        }, 
                        {
                            type:['mechanical'],
                            name:'Chassis',
                            description:[
                                {   body:'The chassis is the primary structure of the car and supports all functional vehicle systems. Joining the chassis subteam means you can get experience in many different areas of engineering.'},
                                {   head:'Designing:',
                                    body:' Using CAD, CAM and FEA'},
                                {   head:'Manufacturing:',
                                    body:' Executing composite processes and machining parts'},
                                {   head:'Testing:',
                                    body:' Using a tensile machine and preparing custom test set-ups'},
                                {   body:' The chassis team is unique because it exposes you to the other systems of the car and how they all connect.'}],
                            lists:[
                            {   name:'Responsibilities',
                                text:["Design new chassis geometry using CAD and FEA", "Perform 3-point bend tests and shear tests on carbon fibre samples", "Create moulds for creating composite components", "Work with other subteams to assure cohesion with other components of the car", "Prepare important documents for competition", "Seek sponsorships from companies", "Develop new prepreg composite processes and documentation", "Use hand tools","Welding"]},],
                            openings: 'Sept 21, 2019',
                            applyLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HcudP17cNU8BHgDGFRZepf_xUMDZaMVpMUEs1OFZVRkIxQ1NNVVZPODRIUyQlQCN0PWcu"
                        }, 
                        {
                            type:['mechanical'],
                            name:'Vehicle Dynamics',
                            description:[
                                {   body:'Learn about the dynamic vehicle subsystems including suspension, drivetrain, steering, and brakes. Learn how to design, simulate, CAD, and manufacture parts for the car. First-hand experience in learning all that goes into making a race car fast!'},
                                {   head:'Design:',
                                    body:' CAD (Computer Aided Design), FEA (Finite Element Analysis)'},
                                {   head:'Simulation:',
                                    body:' Using simulation software such as optimum kinematics and VI grade'},
                                {   head:'Manufacturing:',
                                    body:' Machining, welding, painting and powder coating of any vehicle dynamics components as well as other systems occasionally'}
                            ],
                            lists:[{
                            name:'Responsibilities',
                            text:["Simulate and CAD (Computer Aided Design) parts for any of the vehicle dynamics subsystem ", "Generate, edit, publish and share engaging content daily(e.g. original text, photos, videos and news)", "Manufacturing parts out of steel, aluminum and composite materials using machining and fabrication tools such as the mill, lathe, MIG/TIG welders and more!", "Testing and tuning the vehicle dynamics sub-systems in the field and relating it to our simulation data","Managing designs as well as paperwork including documentation needed for competition and part drawings  "]}
                            ],
                            openings: 'Sept 21, 2019',
                            applyLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HcudP17cNU8BHgDGFRZepf_xUNU5BM0ZKRkdKUDFKVUo1WEU2UDNYUkY5VSQlQCN0PWcu"
                            // background:aeroBackground
                        },
                        {
                            type:['electrical'],
                            name:'Electronics and Wiring',
                            description:[
                                {   body:'The electrical systems in the car control all aspects of the vehicles operation, including low voltage and high voltage safety circuits, microcontrollers, CAN bus, power electronics, and more.'},
                                {   body:'Joining the electronic and wiring subteam means you can get experience with'},
                                {   head:'Circuit Design: ',
                                    body:' Using circuit simulation software, and Altium Designer for schematics'},
                                {   head:'PCB Layout: ',
                                    body:' Implementing circuitry onto PCBs for use for test purposes or for in the vehicle (Using Altium Designer)'},
                                {   head:'Wiring: ',
                                    body:'learning to cut, strip, and crimp wiring for assembly of low voltage wiring harness for inside the vehicle or for testing purposes, and tractive systems wiring for high voltage system'},
                                {   head:'Assembly: ',
                                    body:' Assembling PCBs by soldering on various through hole and surface mount components'},
                                {   head:'ECAD: ',
                                    body:' Generate schematics for devices to denote connectivity, and route wires for various systems in the full CAD model of the car, using SolidWorks'},
                                {   head:'Testing: ',
                                    body:' using oscilloscope, function generators, multimeters, and power supplies to optimizecircuits during design phase and testing PCBs prior to any use in the vehicle. Testing of wiring harness for continuity, comparing sensor outputs to that specified on datasheets, and much more'}
                            ],
                            lists:[
                                {
                            name:'Responsibilities',
                            text:["Designing new and improved circuits for vehicle operation that work more reliably", "Designing lower power circuits that are more efficient and optimized for their specific application", "Optimizing PCB layouts for space constraints and heat dissipation", "Researching different power converter topologies for efficient DC/DC conversions for different voltage levels used in the vehicle", "Helping to prepare important documents for competition submissions","Testing current PCBs and finding ways to improve current systems", "Researching any electronics related items that you may find useful for the vehicle", "Assembling and testing new PCBs"]},
                            {
                                name:"Skills Needed",
                                text:["The team needs people with different skill backgrounds so don’t be discouraged if you don’t have any relevant experience!"]
                            }
                            ],
                            openings: 'Sept 21, 2019',
                            applyLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HcudP17cNU8BHgDGFRZepf_xUMjZWRFQxTEg4RjEzMUhHVTJJQUdOMzBJSCQlQCN0PWcu"
                            // background:aeroBackground
                        },  
                        {
                            type:['electrical','mechanical'],
                            name:'Accumulator',
                            description:[
                                {   body:'As part of the Accumulator Team, you will work on designing, manufacturing, and testing the vehicle battery.'},
                                {   body:'You will need to work closely with other electrical sub-teams to ensure all necessary power, signals and circuits requirements are met. You must be passionate about engineering and teamwork. '},
                                {   head:'Design: ',
                                    body:'CAD (Computer Aided Design), FEA (Finite Element Analysis), MATLAB '},
                                {   head:'Simulation: ',
                                    body:'Using simulation software such as Ansys and VI grade'},
                                {   head:'Manufacturing: ',
                                    body:'Machining, welding, composites, soldering, and wiring'},
                            ],
                            lists:[
                                {
                            name:'Specific Responsibilities: ',
                            text:['Design and test low voltage circuits within the Accumulator ','Communicate with other teams to ensure all wiring and space needs are met ','Design and test PCBs with HV and LV circuits ','Communicate with other teams to ensure power needs are met and all circuits can be properly integrated  ','Ensure system meets all competition rules and requirements ']},
                            {
                                name:"What you will learn: ",
                                text:['Organization', 'Component and System Level Testing ', 'In-depth knowledge of high voltage systems ', 'In-depth knowledge of batteries  ', 'Time Management']
                            },
                            {
                                name:"Beneficial Qualifications:  ",
                                text:['Proficient with MATLAB ', 'HV Training ','Experience with Electrical Simulation software (PSpice) ','PCB and Schematic Design (preference towards Altium Designer) ','Knowledgeable in controller area networks (CAN) ','Experience with large reports ','Experience with lithium ion or lithium polymer batteries ','Leadership and project management ','An enthusiasm to learn!']
                            }
                            ],
                            openings: 'Sept 21, 2019',
                            applyLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HcudP17cNU8BHgDGFRZepf_xUQkpaTFNOSllER1gyT09IMzNWUE0wWVo4MCQlQCN0PWcu"
                            // background:aeroBackground
                        },  
                        {
                            type:['software'],
                            name:'Software and Embedded Systems',
                            description:[
                                {body:'Learn about developing and designing software for embedded systems and software applications.'},
                                {body:'Also, you’ll be programming microcontrollers to interface with various sensors such as a GPS, an accelerometer, thermistors, and many more.'},
                                {body: 'As a Software & Embedded Systems Developer, you’ll get experience with: '},
                                {body: '- Interfacing with microcontroller hardware features such as timers, PWMs, DACs, and ADCs '},
                                {body: '- C/C++ programming and bit of python '},
                                {body: '- Communication protocols such as SPI, I2C, UART, and CAN'},
                                {body: '- Understanding circuit diagrams'},],
                            lists:[
                                {   name:'Responsibilities:',
                                    text:['Developing C/C++ code for programmable microcontrollers', 'Creating and prototyping circuits to test embedded systems and validate software and hardware designs', 'Debugging and testing software/hardware using microcontroller debuggers, multimeters, logic analyzers, and oscilloscopes']},
                                {   name:'Skills Needed:',
                                    text:['The team needs people with different skill backgrounds so don’t be discouraged if you don’t have any relevant experience! ']}],
                            openings: 'Sept 21, 2019',
                            applyLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HcudP17cNU8BHgDGFRZepf_xUMzI1QVo2Q0VCMjVTSUNSWFpMMElRTTFJUyQlQCN0PWcu"
                        },
                        {
                            type:['software'],
                            name:'Controls',
                            description:[
                                {body:'The vehicle control system is responsible for actuating and monitoring the status of the car.'},
                                {body:'More specifically, the control system is responsible for implementing algorithms to optimize the vehicle cooling system, improving vehicle efficiency, improving vehicle dynamics, and running diagnostics while the vehicle is in operation.'},
                                {body: 'As a Controls Developer, you’ll get experience with: '},
                                {body: '- MATLAB and Simulink '},
                                {body: '- Modeling and simulating physical components and systems'},
                                {body: '- Implementing mathematical algorithms and feed-back controllers'},
                                {body: '- Vehicle diagnostics and telemetry'},
                                {body: '- Communication protocols such as SPI, I2C, UART, and CAN'},],
                            lists:[
                                {   name:'Responsibilities:',
                                    text:['Developing control systems using block-diagrams', 'Testing and validating the controls by creating unit tests', 'Data acquisition and vehicle diagnostics ']},
                                {   name:'Skills Needed:',
                                    text:['The team needs people with different skill backgrounds so don’t be discouraged if you don’t have any relevant experience! ']}],
                            openings: 'Sept 21, 2019',
                            applyLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HcudP17cNU8BHgDGFRZepf_xUODhBU1FOUVQxOU5aTEkwNkFXSkgyRjE4SSQlQCN0PWcu"
                        },
                        {
                            type:['business'],
                            name:'Business & Finance',
                            description:[
                                {   body:'The Business & Finance Manager will be responsible for managing the bookkeeping and financial records for the team'},
                                {body:'This role also requires the candidate to create a business case presentation for competition, forecasts for budgeting, and cash flow reports. They will also be responsible to implement strategies to cut down on costs and make recommendations to streamline project management.'}
                            ],
                            lists:[
                                {
                            name:'Duties include:',
                            text:["Develop business case presentation for competition",'Assisting in the preparation of budgets ','Managing records and receipts ','Reconciling daily, monthly and yearly transactions ','Preparing balance sheets ','Processing invoices ','Being a key point of contact for other departments on financial and accounting matters ','Establish the company’s goals and objectives ','Assist in recruitment and training of new team members ']},
                            {
                                name:'What you will learn: ',
                                text:['How to fully take control of an organization’s books ','How to create a budget and try to allocate money to ensure the project is financially stable ','How to write effective business proposals ']
                            },
                            {
                                name:'Beneficial Qualifications: ',
                                text:['Experience with bookkeeping ','Strong organization skills ','Effective presentation and communication skills ','An enthusiasm to learn! ']
                            }
                            ],
                            openings: 'Sept 21, 2019',
                            applyLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HcudP17cNU8BHgDGFRZepf_xUM1M3V1pDTkZQTjlFODBCRzhZWDdYUEwwVCQlQCN0PWcu"
                        },
                        {
                            type:['business'],
                            name:'Marketing & Sponsorship',
                            description:[
                                {   body:'The Marketing & Sponsorship Manager, you will be responsible for building and leading all phases of the sponsorship & marketing program.'},{
                                    body:'This involves responsibility for developing and maintaining a marketing plan for the sponsor program in order to meet or exceed the overall business objectives.'
                                }
                            ],
                            lists:[
                                {
                            name:'Duties include:',
                            text:["Develop and implement a sponsorship plans for increasing revenues in a cost-effective manner. Target objectives include increasing sponsorship sales and creating sponsorship products and licensing deals in order to meet or exceed the overall business objectives. ", 'Develop and implement a sponsorship budget to achieve the sales plan. ','Develop and implement an annual trade show or other events to assist in achieving the business objectives. ','Manages all sponsorship activities. Responsible for sponsor prospecting, proposal customization and presentation, contract revision and servicing, sponsor follow-up and support, trade shows development and representing the company at industry functions. ','Oversee social media accounts’ design (e.g. Facebook timeline cover, profile pictures and blog layout) ','Suggest and implement new features to develop brand awareness, like promotions and competitions ']},
                            {
                                name:'What you will learn:',
                                text:['Client relationship management skills','Writing effective proposals ','Experience coordinating events ','Social media management ']
                            },
                            {
                                name:'Beneficial Qualifications:',
                                text:['Event sponsorship experience is a plus!','A positive, ego-free attitude and willingness to work creatively on new ideas. ','Ability to develop effective working relationships with teammates and partners. ','An enthusiasm to learn! '] 
                            }
                            ],
                            openings: 'Sept 21, 2019',
                            applyLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HcudP17cNU8BHgDGFRZepf_xURERXS0lGUk9JWFZBVElPMUUwMDZDQUg4RCQlQCN0PWcu"
                        }   
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

        const  visiblePosition = this.state.positions.filter(position => position.type.includes(this.state.positionsListed) || this.state.positionsListed === 'all');

        const positions = 
        <div className="positions-section-container">
                <div className="positions-container">
        {visiblePosition.map(position => (
            <div className={`position-container ${(position.applyLink === '#'? 'closed':'open')}`} >
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
