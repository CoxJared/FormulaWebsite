import React, {Component} from 'react';
import Header from './../layout/Header';
import MainShowcase from '../layout/MainShowcase';


class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainShowcase />

                <div className="about-us">
                    <h1>What We Do</h1>
                    <p>
                        Formula SAE and Formula Student challenge students to build a single seat, open wheeled racecar to compete against other schools at annual international competitions. There are many areas of evaluation in these competitions including engineering design, business and cost as well as numerous dynamic events.
                    </p>
                    <br></br>
                    <p>
                        Every year, the team starts out be creating new goals. From there, a plan of action is formed, deadlines are established, and tasks are distributed between team members. Although Formula Student is an engineering competition, the team requires more than just engineering students. As a result, a conscious effort is made to appeal to students with a variety of backgrounds, interests, and areas of study. This ensures that we have the best people in the right roles. The team then proceeds to budget and design the car. Once this task is completed simulations are run to optimize the theoretical designs. From there, manufacturing and assembly of components commence. Once the car is completed, a demanding testing regime ensures validation of designs before the car and team are sent to competition.
                    </p>
                </div>
            <div className="why-electric-section">
                <div className="why-electric-textbox"> 
                    <h1>Why Electric?</h1>
                    <h2>Sustainable</h2>
                    <p>
                        MAC Formula Electric recognizes the necessary shift to the use of cleaner technology. By using electric vehicles as a platform for inn ovation the team hopes to promote the development of a socially, economically, and environmentally sustainable future.
                    </p>
                    <h2>High Performance</h2>
                    <p>
                        With efficiencies of over 90%, electric motors are able to transmit a higher percentage of power to the wheels than an internal combustion engine. Moreover, with the ability to provide maximum torque at any speed, performance figures for MAC Formula Electric’s first car rival the top combustion and hybrid automobiles.
                    </p>
                    <h2>
                        Future of Transportation
                    </h2>
                    <p>
                        By getting hands-on experience in high-performance, environmentally-friendly technologies, our members are well equipped for the industry that awaits them upon graduation.
                    </p>
                </div>
            </div>
            



            </div>
        );
    }
}

export default Home;