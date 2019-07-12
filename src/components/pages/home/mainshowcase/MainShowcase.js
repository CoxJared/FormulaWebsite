import React, { Component } from 'react';
import showcaseImage from './../../../../img/HomeCourt.jpg';
import showcaseMain from './../../../../img/mcmaster-logo.png';
import './MainShowcase.scss';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import img1 from './../../../../img/HomeCourt.jpg';
import img2 from './../../../../img/CentreFold.jpg';

import Macfelogo from './../../../../img/logo-transparent.png';
import SchoolLogo from './../../../../img/school-logo.png';


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

    componentDidMount() {
        var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };
        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
    
            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
    
            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
            var that = this;
            var delta = 200 - Math.random() * 100;
    
            if (this.isDeleting) { delta /= 2; }
    
            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }
    
            setTimeout(function() {
            that.tick();
            }, delta);
        };
        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                  new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fd0}";
            document.body.appendChild(css);
        };
    }

    render() {
        return (
            <div className="showcase">
                <link href="https://fonts.googleapis.com/css?family=Assistant&display=swap" rel="stylesheet"/>
                <Slider className="slider-wrapper" autoplay={10000}>
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
                    <div className="intro">
                        <div className="top-bar">
                            <img className="mac-logo" src={SchoolLogo} alt=""/>
                            <h2 className="school-name">McMaster University</h2>
                            <img className="team-logo" src={Macfelogo} alt=""/>
                        </div>
                        <div className="draw-line"></div>
                        <h1>Mac Formula Electric</h1>
                        <div className="draw-line"></div>
                        <div className="typewriter-container">
                            <h3 className="solid-text">Discover  </h3>
                            <h3>           
                            <a href="" className="typewrite" data-period="2000" data-type='[ "Technology", "Teamwork", "Innovation"]'>
                                <span class="wrap"></span>
                            </a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="who-are-we">
                        <h1 className="who-are-we-header">Who Are We</h1>
                        <p className="who-are-we-p">We are 80 students coming from a variety of faculty, experiences and interests all working together to push the boudaries of electric vehicle technology   
                        </p>
                </div>
                <div className="why-eletric">
                        <h1 className="why-electric-header">Why Electric</h1>
                        <p className="why-electric-p1">By using electric vehicles as a platform for innovation our team hopes to promote the development of a socially, economically, and environmentally sustainable future.  
                        </p>
                </div>
                {/*}
                <div className="why-electric">
                        <h1>Why Electric</h1>
                        <p>Formula SAE and Formula Student challenge students to build a single seat, open wheeled racecar to compete against other schools at annual international competitions. There are many areas of evaluation in these competitions including engineering design, business and cost as well as numerous dynamic events.</p>
                </div> */}
                </Slider>
            </div>
        )
    }
}

export default MainShowcase;
