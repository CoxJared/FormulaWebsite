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
                            applyLink: "#"
                        }, 
                        {
                            type:'mechanical',
                            name:'Chassis Team Member',
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
                            applyLink: "#"
                        }, 
                        {
                            type:'mechanical',
                            name:'Vehicle Dynamics Team Member',
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
                            applyLink: "#"
                            // background:aeroBackground
                        },
                        {
                            type:'electrical',
                            name:'Low Voltage Team Member',
                            description:[
                                {   body:'The low voltage systems in the car control all aspects of the vehicles operation, including safety circuits, microcontrollers, CAN bus, power electronics, and more.'},
                                {   body:'Joining the low voltage subteam means you can get experience with'},
                                {   head:'Circuit Design:',
                                    body:' Using circuit simulation software, and Altium Designer for schematics'},
                                {   head:'PCB Layout:',
                                    body:' Implementing circuitry onto PCBs for use for test purposes or for in the vehicle'},
                                {   head:'Wiring:',
                                    body:' learning to cut, strip, and crimp wiring for assembly of wiring harness for inside the vehicle or for testing purposes'},
                                {   head:'Assembly:',
                                    body:' Assembling PCBs by soldering on various through hole and surface mount components'},
                                {   head:'Testing:',
                                    body:' using oscilloscope, function generators, multimeters, and power supplies to optimizecircuits during design phase and testing PCBs prior to any use in the vehicle. Testing of wiring harness for continuity, comparing sensor outputs to that specified on datasheets, and much more'}
                            ],
                            lists:[
                                {
                            name:'Responsibilities',
                            text:["Designing new and improved circuits for vehicle operation that work more reliably", "Designing lower power circuits that are more efficient and optimized for their specific application", "Optimizing PCB layouts for space constraints and heat dissipation", "Researching different power converter topologies for efficient DC/DC conversions for different voltage levels used in the vehicle", "Helping to prepare import documents for competition submissions","Testing current PCBs and finding ways to improve current systems", "Researching any electronics related items that you may find useful for the vehicle", "Assembling and testing new PCBs"]},
                            {
                                name:"Skills Needed",
                                text:["The team needs people with different skill backgrounds so don’t be discouraged if you don’t have any relevant experience!"]
                            }
                            ],
                            openings: 'Sept 21, 2019',
                            applyLink: "#"
                            // background:aeroBackground
                        },  
                        {
                            type:'business',
                            name:'Social Media Manager',
                            description:[
                                {   body:'As a Social Media Manager, we expect you to be up-to-date with the latest digital technologies and social media trends. You should have excellent communication skills and be able to express our team\'s views creatively.'},
                                {   body:'We are looking for a talented social media manager to administer our social media accounts. You will be responsible for creating original text and video content, managing posts and responding to followers. You will manage our team image in a cohesive way to achieve our marketing goals.'},
                                {   body:'Ultimately, you should be able to handle our social media presence ensuring high levels of web traffic and follower engagement.'}
                            ],
                            lists:[
                                {
                                    name:'Responsibilities',
                                    text:["Perform research on current benchmark trends and audience preferences", "Design and implement social media strategy to align with business goals","Set specific objectives and report on ROI", "Generate, edit, publish and share engaging content daily(e.g. original text, photos, videos and news)", "Manage commitments to sponsors regarding social media posts", "Monitor SEO and web traffic metrics", "Collaborate with other teams, like marketing, engineering and sponsorship to generate content and ensure brand consistency", "Communite with followers, respond to queries in a timely manner", "Oversee social media accounts' design(e.g Facebook timeline cover, profile pictures and blog layout)", "Suggest and implement new features to develop brand awareness, like promotions and competitions", "Stay up-to-date with current technologies and trends in social media, design tools and applications"]},
                                {
                                    name:'Requirements',
                                    text:['Proven work experience as a Social media manager is preferred', 'Hands on experience in content management', 'Excellent copywriting skills', 'Ability to deliver creative content (text, image and video)', 'Solid knowledge of SEO, keyword research and Google Analytics', 'Knowledge of online marketing channels', 'Familiarity with web design is a benefit but not required', 'Excellent communication skills', 'Analytical and multitasking skills', 'Working toward a bachelor’s degree in Marketing or relevant field' 
                                    ]
                                }
                            ],
                            openings: 'Sept 21, 2019',
                            applyLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HcudP17cNU8BHgDGFRZepf_xUQlg2SDJTUFkwODI1OUtPWEgzMElZUUo4VCQlQCN0PWcu"
                        },
                        {
                            type:'business',
                            name:'Finance Manager',
                            description:[
                                {   body:'The Finance Manager will be responsible for managing the bookkeeping and financial records for the team. This role also requires the candidate to create short- and long-term forecasts for budgeting and cash flow purposes. They will also be responsible to implement strategies to cut down on costs. '},
                            ],
                            lists:[
                                {
                            name:'Responsibilities',
                            text:["Assisting in the preparation of budgets", "Managing records and receipts","Reconciling daily, monthly and yearly transactions", "Preparing balance sheets", "Processing invoices", "Developing an in-depth knowledge of organizational products and process", "Providing customer service to clients", "Being a key point of contact for other departments on financial and accounting matters"]},
                            {
                                name:'What you will learn',
                                text:['How to fully take control of an organization’s books' ,'How to create a budget and try to allocate money to ensure the project is financially stable']
                            },
                            {
                                name:'Beneficial Qualifications',
                                text:['Experience with bookkeeping' ,'Impeccable time management skills', 'Strong organization skills', 'Working towards a bachelor’s degree in Finance, Economics, Accounting, Business or Business Administration, or Mathematics']
                            }
                            ],
                            openings: 'Sept 21, 2019',
                            applyLink: "#"
                        },
                        {
                            type:'business',
                            name:'Sponsorship Manager',
                            description:[
                                {   body:'The Sponsorship Manager, you will be responsible for building and leading all phases of a sponsorship program. This involves responsibility for developing and maintaining a marketing plan for the sponsor program in order to meet or exceed the overall business objectives.'},{
                                    body:'Responsibilities include sponsor prospecting, proposal customization and presentation, contract revision and servicing, and sponsor follow-up and support.'
                                }
                            ],
                            lists:[
                                {
                            name:'Responsibilities',
                            text:["Develop and implement a sponsorship sales plan for increasing revenues in a cost-effective manner. Target objectives include increasing sponsorship sales and creating sponsorship products and licensing deals in order to meet or exceed the overall business objectives. ",'Develop and implement a sponsorship budget to achieve the sales plan. ','Develop and implement an annual trade show or other events to assist in achieving the business objectives. ', 'Develop, maintain and implement sponsorship program guidelines to increase sponsorship recruitment, satisfaction, and support. ', 'Manages all sponsorship activities.  Responsible for sponsor prospecting, proposal customization and presentation, contract revision and servicing, sponsor follow-up and support, trade shows development and representing the company at industry functions. ', 'Interface with Internet Marketing to create and manage online sponsorship programs to ensure a steady stream of prospects and future sales. ','Submit marketing plans, prospect activity, and forecast reports to the President; provide briefings to others as necessary or as requested.  Perform other duties as assigned. ']},
                            {
                                name:'What you will learn',
                                text:['Client relationship management skills ' ,'How to write effective proposals ', 'Gain experience coordinating events ','Develop strong communication skills internal and external to the organization']
                            },
                            {
                                name:'Beneficial Qualifications',
                                text:['Sales experience, selling advertising to big brands directly or via ad agencies.' ,'IEvent sponsorship experience is a plus!','A positive, ego-free attitude and willingness to work creatively on new ideas.','Ability to develop effective working relationships with teammates and partners.'] 
                            }
                            ],
                            openings: 'Sept 21, 2019',
                            applyLink: "#"
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

        const  visiblePosition = this.state.positions.filter(position => position.type=== this.state.positionsListed || this.state.positionsListed === 'all');

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
