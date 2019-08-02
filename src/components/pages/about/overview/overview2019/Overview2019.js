import React, { Component } from 'react';
import './Overview2019.css';

import bcmphoto from './../../../../../img/bcm-nice.jpg';
import bcmopen from './../../../../../img/design-showcase/lowvoltage/unpacking.jpg';

import freshChassis from './../../../../../img/freshChassis.jpg';
import bag from './../../../../../img/design-showcase/chassis/infusion.jpg';
import faro from './../../../../../img/design-showcase/chassis/faro.jpg';

import invertorChillin from './../../../../../img/invertorchilllin.jpg';
import accum from './../../../../../img/design-showcase/tractivesystem/accumcomp.jpg';
import under from './../../../../../img/design-showcase/aerodynamics/layup-undertray.jpg';
import fw from './../../../../../img/design-showcase/aerodynamics/frontwingcomp.jpeg';

import dashdash from './../../../../../img/dashdash.jpg';
import dashwrap from './../../../../../img/design-showcase/controls/controls-wheel.jpg'

import vinylWrap from './../../../../../img/vinyl.jpg'
import pods from './../../../../../img/design-showcase/chassis/wrappods.jpg';
import progresswrap from './../../../../../img/design-showcase/chassis/wrapping.jpg';
import wing from './../../../../../img/design-showcase/chassis/wrapwing.jpg';

import OverviewPopup from './../OverviewPopup';


export class Overview2019 extends Component {
    constructor(){
        super()

        this.state = {
            popup: <div />,
            milestones:[
                {
                    name:"Carbon Monocoque",
                    paragraph:"This year's completion of our teams carbon fiber monocouque represented a milestone in all aspects of engineering. The process went through the stages of theoretical analysis and preliminary design, translated into feasible designs validated by both FEA and physical testing of basic composite strength characteristics. All that was learned from this process was applied to a full chassis design which was built 100% by dedicated students on the team. The result represents an impressive carbon body for our car and an excellent baseline for future members to learn from and improve upon.",
                    images:[freshChassis, bag,faro]
                },
                {
                    name:"Body Control Module",
                    paragraph:"One of most proud accomplishments this season was our new custom Body Control Module, BMC for short. This board is the main board that controls all systems of the car, appart from the motors. The board has 2 microcontrollers for parellel processing of vehicle data, such as pedal position, steering angle, etc. The board also houses safety circuitry for the car, as well as circuitry for the dashboard display, and for CAN communication, the protocal used for communication between the vehicles various systems. The board is located in the front end of the car, in an aluminum enclosure with a fan for active cooling of the power electronics.",
                    images:[bcmphoto,bcmopen]
                },
                {
                    name:"Composites",
                    paragraph:"One of the manufacturing processes we our proud of this year is our use of composites through a vacuum infusion process. We have used this process to create a number of different carbon fibre parts on the car, including the whole aerodynamic package.  We have also taken advantage of the properties of kevlar with respect to high voltage.  With this knowledge we have constructed a kevlar composite firewall, invertor enclosure, and full accumulator encloure.",
                    images:[invertorChillin, fw, accum, under]
                },
                {
                    name:"Custom Dashboard",
                    paragraph:"The dashboard is composed of a custom designed dashboard interface for a 3.5-inch screen. The dashboard GUI is programmed using python, and a Raspberry Pi3 is used to display the GUI. By having a customized GUI, the team can display and emphasize any information the driver wishes. This gives the driver the most important information depending on the mode the vehicle is in (e.g. autocross, acceleration, endurance, etc.), as well as providing important vehicle diagnostics information for the driver’s safety.",
                    images:[dashdash, dashwrap]
                },
                {
                    name:"Vinyl-wrap",
                    paragraph:"The Vinyl-wrap of our car was applied in-house by members with experience in that field.  The surface of the chassis, sidepods, and both wings were first thoroughly cleaned with an alcoholic solution to prepare for wrapping. The vinyl sheets were then given a wipe-down, measured, and cut for each panel accordingly.  The backing of the vinyl was finally peeled off and placed on the corresponding panel while air bubbles were being worked out of the vinyl through a combination of using heat guns, stretching the vinyl, and specialized vinyl wrapping tools. The result being a clear and smooth finish across the whole vehicle.",
                    images:[vinylWrap,progresswrap,wing,pods]
            }
            ]
        }
    }
    showPopup= (milestone) =>{
        this.setState({popup:
        <OverviewPopup 
        name={milestone.name}
        paragraph={milestone.paragraph}
        images={milestone.images}
        destroyPopup={this.destroyPopup}
        />})
    }
    destroyPopup = () => {
        this.setState({popup:<div/>})
    }


    render() {
        return (
            <div className="overview2019-full-container">
                <div className="overview2019-showcase">
                    <h1 className="overview2019-showcase-header">Season Review</h1>
                    
                </div>
                <p className="overview2019-intro-para">
                MAC Formula Electric began as a small group of dedicated students who have grown the team into what it is now, a team of over 80 active members working on various aspects of the car.  The team spans over all engineering faculties as well as applied sciences, creating a well rounded and functional group dynamic. As the group of original founding members graduated this past year, our team has embraced the opportunity to re-structure and accept new, ambitious young engineering students who will build upon what has been achieved so far. The team is currently completing the build phase of our fully electric, all wheel drive, Formula 1 style racecar.  Here are some of the milestones we have achieved this year.
                        </p>

                <div className="overview2019-explore-milestones-container">

                    {this.state.milestones.map(milestone => (
                        <div className="overview2019-explore-milestones-single" onClick={this.showPopup.bind(this,milestone)}>
                        <img className="overview2019-explore-milestones-image" src={milestone.images[0]} alt=""/>
                        <div className="overview2019-explore-milestones-header-container">
                            <h1 className="overview2019-explore-milestones-header">{milestone.name}</h1>
                        </div>
                    </div>
                    ))}
                    
                
                </div>
{this.state.popup}



                {/* <OverviewPopup image={freshChassis} 
                heading="Carbon Fibre Monocoque" 
                paragraph = "Our Next Major achievment this season was our new custom Body Control Module, BMC for short. This board is the main board that controls all systems of the car, appart from the motors. The board has 2 microcontrollers for parellel processing of vehicle data, such as pedal position, steering angle, etc. The board also houses safety circuitry for the car, as well as circuitry for the dashboard display, and for CAN communication, the protocal used for communication between the vehicles various systems. The board is located in the front end of the car, in an aluminum enclosure with a fan for active cooling of the power electronics."/> */}


                        {/* <div className="text-row-with-photo-container">
                <div className="text-row-with-photo">
                    <div className="text-row-image-container text-row-right"><img className="text-row-image" alt="" src={freshChassis}></img></div>
                    <div className="text-row-text-container text-row-left">
                        <div className="text-row-text-title-container">
                        <h1 className="text-row-text-title">Monocoque</h1>
                        </div>
                        <p className="text-row-text t">
                        
                        </p>
                    </div>
                </div>
                </div>
                <div className="text-row-with-photo-container">
                <div className="text-row-with-photo">
                    <div className="text-row-image-container text-row-left"><img className="text-row-image" alt="" src={bcmphoto}></img></div>
                    <div className="text-row-text-container text-row-right">
                    <div className="text-row-text-title-container">
                        <h1 className="text-row-text-title">BCM</h1>
                        </div>
                        <p className="text-row-text t">
                        Our Next Major achievment this season was our new custom Body Control Module, BMC for short. This board is the main board that controls all systems of the car, appart from the motors. The board has 2 microcontrollers for parellel processing of vehicle data, such as pedal position, steering angle, etc. The board also houses safety circuitry for the car, as well as circuitry for the dashboard display, and for CAN communication, the protocal used for communication between the vehicles various systems. The board is located in the front end of the car, in an aluminum enclosure with a fan for active cooling of the power electronics.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="text-row-with-photo-container">
                <div className="text-row-with-photo">
                    <div className="text-row-image-container text-row-right"><img className="text-row-image" alt="" src={invertorChillin}></img></div>
                    <div className="text-row-text-container text-row-left">
                    <div className="text-row-text-title-container">
                        <h1 className="text-row-text-title">Composites</h1>
                        </div>
                        <p className="text-row-text t">
                            One of the manufacturing processes we our proud of this year is our use of composites through a vacuum infusion process. We have used this process to create a number of different carbon fibre parts on the car, including the whole aerodynamic package.  We have also taken advantage of the properties of kevlar with respect to high voltage.  With this knowledge we have constructed a kevlar composite firewall, invertor enclosure(pictured right), and full accumulator encloure.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="text-row-with-photo-container">
                <div className="text-row-with-photo">
                    <div className="text-row-image-container text-row-left"><img className="text-row-image" alt="" src={dashdash}></img></div>
                    <div className="text-row-text-container text-row-right">
                    <div className="text-row-text-title-container">
                        <h1 className="text-row-text-title">Dashboard</h1>
                        </div>
                        <p className="text-row-text t">
                        Our Next Major achievment this season was our new custom Body Control Module, BMC for short. This board is the main board that controls all systems of the car, appart from the motors. The board has 2 microcontrollers for parellel processing of vehicle data, such as pedal position, steering angle, etc. The board also houses safety circuitry for the car, as well as circuitry for the dashboard display, and for CAN communication, the protocal used for communication between the vehicles various systems. The board is located in the front end of the car, in an aluminum enclosure with a fan for active cooling of the power electronics.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="text-row-with-photo-container">
                <div className="text-row-with-photo">
                    <div className="text-row-image-container text-row-right"><img className="text-row-image" alt="" src={vinylWrap}></img></div>
                    <div className="text-row-text-container text-row-left">
                    <div className="text-row-text-title-container">
                        <h1 className="text-row-text-title">Vinyl Wrap</h1>
                        </div>
                        <p className="text-row-text t">
                            In house vnyl wrap.
                        </p>
                    </div>
                    </div>
                </div> */}


            </div>
        )
    }
}

export default Overview2019

