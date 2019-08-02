import React from 'react';
import './WhyElectric.css';

export function WhyElectric () {
    return (
        <div className="why-electric-container-full">
            <div className="why-electric-container">
                <div className="why-electric-header-container">
                    <h1 className="why-electric-header">Why Electric?</h1>
                </div>
                <div className="why-electric-textbox">  
                    <div className="why-electric-reason-container sustainable-container">
                        <div className="why-electric-reason-image-container image-sustainable"></div>
                        <div className="why-electric-reason-header-container">
                            <h2>Sustainability</h2>
                        </div>
                        <div className="why-electric-reason-paragraph-container">
                            <p>
                                MAC Formula Electric recognizes the necessary shift to the use of cleaner technology. By using electric vehicles as a platform for innovation the team hopes to promote the development of a socially, economically, and environmentally sustainable future.
                            </p>
                        </div>
                    </div>
                    <div className="why-electric-reason-container">
                        <div className="why-electric-reason-image-container image-performance"></div>
                        <div className="why-electric-reason-header-container">
                            <h2>High Performance</h2>
                        </div>
                        <div className="why-electric-reason-paragraph-container">
                            <p>
                                With efficiencies of over 90%, electric motors are able to transmit a higher percentage of power to the wheels than an internal combustion engine. Moreover, with the ability to provide maximum torque at any speed, performance figures for MAC Formula Electric’s race car will dominate top combustion automobiles.
                            </p>
                        </div>
                    </div>
                    <div className="why-electric-reason-container">
                        <div className="why-electric-reason-image-container image-future"></div>
                        <div className="why-electric-reason-header-container">
                            <h2> 
                                Future of Transportation
                            </h2>
                        </div>
                        <div className="why-electric-reason-paragraph-container">
                            <p>
                                By getting hands-on experience in high performance, environmentally friendly technologies, our members are well equipped for the industry that awaits them upon graduation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyElectric
