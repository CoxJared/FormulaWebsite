import React from 'react';
import './Events.css';
import Media from '../../../components/media/Media';

import welcomeWeekPhoto from './../../../img/events-backgrounds/simulator-ponytail.jpg';
import saeNight from './../../../img/events-backgrounds/sae-night-background.jpg';
import formulaNorth from './../../../img/events-backgrounds/formula-north.jpg';
import infoSesh from './../../../img/events-backgrounds/Fall 2019 Poster.jpg';

export function Events () {
    return (
        <div className="width-restricter">
            <h1 className="eventses-title">Events</h1>
            <div className="events-container">
                {/* <div className="events-title-container">
                    <div className="line-break-events"></div>
                    <h1 className="events-title"> Events</h1>
                </div> */}
                    {/* <div className="line-break-events"></div> */}
                    
                <div className="events-events">
                    <Media 
                    link="https://www.facebook.com/events/473860533169923/"
                    date="September 13, 2019"
                    title="Information Session"
                    label="Recruitment"
                    message="Learn More"
                    image={infoSesh}
                    />
                    <Media 
                    link="https://www.facebook.com/events/2381516432105723/"
                    date="August 27, 2019"
                    title="Welcome Week"
                    label="Recruitment"
                    message="Learn More"
                    image={welcomeWeekPhoto}
                    />
                    <Media 
                    link="http://saecentralontario.org/events/"
                    date="June 1, 2019"
                    title="2019 SAE Student's night"
                    message="Learn More"
                    image={saeNight}
                    />
                    {/* <Media 
                    link="https://www.sae.org/attend/student-events/formula-sae-north"
                    date="March 4, 2019"
                    title="FSAE - Formula North"
                    message="Learn More"
                    image={formulaNorth}
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default Events
