import React from 'react';
import './WhatWeDo.css';

export function WhatWeDo () {
    return (
        <div className="what-we-do-full-container">
            <div className="what-we-do-title-container">
                <div className="what-we-do-title-inner">
                    <h1 className="what-we-do-title">What We Do</h1>
                </div>
            </div>
            <div className="what-we-do-container">   
                <div className="what-we-do-paragraph-container">
                    <p className="what-we-do-paragraph">
                        Formula SAE and Formula Student challenge students to build a single seat, open wheeled racecar to compete against other schools at annual international competitions. There are many areas of evaluation in these competitions including engineering design, business and cost as well as numerous dynamic events.
                    </p>
                    <p className="what-we-do-paragraph">
                        Every year, the team starts out by creating new goals. From there, a plan of action is formed, deadlines are established, and tasks are distributed between team members. Although Formula SAE is an engineering competition, the team requires more than just engineering students. As a result, a conscious effort is made to appeal to students with a variety of backgrounds, interests, and areas of study. This ensures that we have the best people in the right roles. The team then proceeds to budget and design the car. Once this task is completed simulations are run to optimize the theoretical designs. From there, manufacturing and assembly of components commence. Once the car is completed, a demanding testing regime ensures validation of designs before the car and team are sent to competition.
                        </p>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
