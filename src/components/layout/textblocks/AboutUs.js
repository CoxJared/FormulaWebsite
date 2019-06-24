import React, { Component } from 'react';
import './AboutUs.css';

class AboutUs extends Component {
    render() {
        return (
            <div className="about-us">
                <h1 className="general-header">What We Do</h1>
                <p>
                    Formula SAE and Formula Student challenge students to build a single seat, open wheeled racecar to compete against other schools at annual international competitions. There are many areas of evaluation in these competitions including engineering design, business and cost as well as numerous dynamic events.
                </p>
                <br></br>
                <p>
                    Every year, the team starts out be creating new goals. From there, a plan of action is formed, deadlines are established, and tasks are distributed between team members. Although Formula Student is an engineering competition, the team requires more than just engineering students. As a result, a conscious effort is made to appeal to students with a variety of backgrounds, interests, and areas of study. This ensures that we have the best people in the right roles. The team then proceeds to budget and design the car. Once this task is completed simulations are run to optimize the theoretical designs. From there, manufacturing and assembly of components commence. Once the car is completed, a demanding testing regime ensures validation of designs before the car and team are sent to competition.
                </p>
            </div>

        )
    }
}

export default AboutUs
