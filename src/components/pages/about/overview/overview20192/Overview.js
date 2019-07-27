import React, { Component } from 'react';
import './Overview.css';
import bcmphoto from './../../../../../img/bcm-nice.png';
import bcmopen from './../../../../../img/design-showcase/lowvoltage/unpacking.jpg';
import freshChassis from './../../../../../img/freshChassis.jpg';
import invertorChillin from './../../../../../img/invertorchilllin.jpeg';
import dashdash from './../../../../../img/dashdash.jpg';
import vinylWrap from './../../../../../img/vinyl.jpeg'
import OverviewPopup from './OverviewPopup';


export class Overview extends Component {
    constructor(){
        super()

        this.state = {
            popup: <div />,
            milestones:[
                {
                    name:"Carbon Monocoque",
                    paragraph:"Our first major milestone this season has been our carbon fibre monocoque.",
                    images:[freshChassis]
                },
                {
                    name:"Body Control Module",
                    paragraph:"Our Next Major achievment this season was our new custom Body Control Module, BMC for short. This board is the main board that controls all systems of the car, appart from the motors. The board has 2 microcontrollers for parellel processing of vehicle data, such as pedal position, steering angle, etc. The board also houses safety circuitry for the car, as well as circuitry for the dashboard display, and for CAN communication, the protocal used for communication between the vehicles various systems. The board is located in the front end of the car, in an aluminum enclosure with a fan for active cooling of the power electronics.",
                    images:[bcmphoto,bcmopen]
                },
                {
                    name:"Composites",
                    paragraph:"One of the manufacturing processes we our proud of this year is our use of composites through a vacuum infusion process. We have used this process to create a number of different carbon fibre parts on the car, including the whole aerodynamic package.  We have also taken advantage of the properties of kevlar with respect to high voltage.  With this knowledge we have constructed a kevlar composite firewall, invertor enclosure(pictured right), and full accumulator encloure.",
                    images:[invertorChillin]
                },
                {
                    name:"Custom Dashboard",
                    paragraph:"Dash shows stuff",
                    images:[dashdash]
                },
                {
                    name:"Vinyl-wrap",
                    paragraph:"rapped it",
                    images:[vinylWrap]
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
                &nbsp; &nbsp;Mac Formula Electric began as a small group of dedicated students who have grown the team into what it is now, a team of over 80 active members working on various aspects of the car. The team spans over multiple faculties outside of engineering, including a dedicated business team which creates a realistic and functional group dynamic. As the group of original founding members graduated this past year, our team has embraced the opportunity to re-structure and accept new, ambitious young engineering students who will build upon what has been achieved so far. The team is currently completing the build phase of our fully electric, all wheel drive, formula 1 style racecar.  Here are some of the milestones we have achieved this year.
                        </p>

                <div className="overview2019-explore-milestones-container">

                    {this.state.milestones.map(milestone => (
                        <div className="overview2019-explore-milestones-single" onClick={this.showPopup.bind(this,milestone)}>
                        <img className="overview2019-explore-milestones-image" src={milestone.images[0]}/>
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

export default Overview
