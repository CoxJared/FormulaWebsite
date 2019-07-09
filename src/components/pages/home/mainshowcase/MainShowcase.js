import React, { Component } from 'react';
import showcaseImage from './../../../../img/HomeCourt.jpg';
import showcaseMain from './../../../../img/mcmaster-logo.png';
import './MainShowcase.css';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import img1 from './../../../../img/HomeCourt.jpg';
import img2 from './../../../../img/CentreFold.jpg';

const content = [
	{
		title: 'What We Do',
		description:
		'Formula SAE and Formula Student challenge students to build a single seat, open wheeled racecar to compete against other schools at annual international competitions. There are many areas of evaluation in these competitions including engineering design, business and cost as well as numerous dynamic events.',
		button: 'Read More',
		image: img1,
		user: 'Luan Gjokaj',
		className: "what-we-do"
	},
	{
		title: 'Why We do it',
		description:
		'Every year, the team starts out be creating new goals. From there, a plan of action is formed, deadlines are established, and tasks are distributed between team members. Although Formula Student is an engineering competition, the team requires more than just engineering students. As a result, a conscious effort is made to appeal to students with a variety of backgrounds, interests, and areas of study. This ensures that we have the best people in the right roles. The team then proceeds to budget and design the car. Once this task is completed simulations are run to optimize the theoretical designs. From there, manufacturing and assembly of components commence. Once the car is completed, a demanding testing regime ensures validation of designs before the car and team are sent to competition.',
		button: 'Discover',
		image: img2,
		user: 'Erich Behrens',
		className: "why-we-do-it"
    },
    {
		title: 'Why Electric',
		description:
        'Sustainable MAC Formula Electric recognizes the necessary shift to the use of cleaner technology. By using electric vehicles as a platform for inn ovation the team hopes to promote the development of a socially, economically, and environmentally sustainable future.  High Performance With efficiencies of over 90%, electric motors are able to transmit a higher percentage of power to the wheels than an internal combustion engine. Moreover, with the ability to provide maximum torque at any speed, performance figures for MAC Formula Electric’s first car rival the top combustion and hybrid automobiles. Future of Transportation By getting hands-on experience in high-performance, environmentally-friendly technologies, our members are well equipped for the industry that awaits them upon graduation.', 
        button: 'Discover',
		image: img2,
		user: 'Erich Behrens',
		className: "why electric"
	},
];

class MainShowcase extends Component {
    render() {
        return (
            <div className="showcase">
                <Slider className="slider-wrapper" autoplay={3000}>
                {/* {content.map((item, index) => (
					<div className="slide-container"
						key={index}		>
						<div className="what-we-do">
							<h1>{item.title}</h1>
							<p>{item.description}</p>
                            <img scr={img1} alt=""/>
						</div>
					</div>
                ))} */}
                <div className="slider-container">
                    <div className="what-we-do">
                        <h1>What We Do</h1>
                        <p>Formula SAE and Formula Student challenge students to build a single seat, open wheeled racecar to compete against other schools at annual international competitions. There are many areas of evaluation in these competitions including engineering design, business and cost as well as numerous dynamic events.</p>
                    </div>
                </div>
                <div className="Why We do it">
                        <h1>Why We do it</h1>
                        <p>Sustainable MAC Formula Electric recognizes the necessary shift to the use of cleaner technology. By using electric vehicles as a platform for inn ovation the team hopes to promote the development of a socially, economically, and environmentally sustainable future.  High Performance With efficiencies of over 90%, electric motors are able to transmit a higher percentage of power to the wheels than an internal combustion engine. Moreover, with the ability to provide maximum torque at any speed, performance figures for MAC Formula Electric’s first car rival the top combustion and hybrid automobiles. Future of Transportation By getting hands-on experience in high-performance, environmentally-friendly technologies, our members are well equipped for the industry that awaits them upon graduation.</p>
                </div>
                <div className="why-electric">
                        <h1>Why Electric</h1>
                        <p>Formula SAE and Formula Student challenge students to build a single seat, open wheeled racecar to compete against other schools at annual international competitions. There are many areas of evaluation in these competitions including engineering design, business and cost as well as numerous dynamic events.</p>
                </div>
                </Slider>
            </div>
        )
    }
}

export default MainShowcase;
