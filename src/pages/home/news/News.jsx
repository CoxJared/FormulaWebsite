import React from 'react';
import './News.scss';
import Media from '../../../components/media/Media';

import maclearnsPhoto from './../../../img/events-backgrounds/macleans.jpg';
import pcbPhoto from './../../../img/events-backgrounds/bcm-event.jpg';
import inhousePhoto from './../../../img/events-backgrounds/inhouse-solutions.jpg';


export function News () {
        return (
        <div className="width-restricter">
            
                <div className="news-title-container">
                    {/* <div className="line-break-events"></div> */}
                    <h1 className="events-title">MAC Formula Electric in the news</h1>
                </div>
                <div className="events-container">
                <div className="events-events">
                    <Media
                        link="https://www.macleans.ca/education/university-students-can-now-earn-badges-to-recognize-their-merits/"
                        date="April 10, 2019"
                        title="University students can now earn badges to recognize their merits"
                        message="Read Article"
                        image={maclearnsPhoto}
                    />
                    <Media
                        link="https://www.pcbway.com/project/sponsor/Body_Control_Module_PCB___MAC_Formula_Electric.html"
                        date="March 4, 2019"
                        title="Body Control Module PCB - MAC Formula Electric"
                        message="Read Article"
                        image={pcbPhoto}
                    />
                    <Media
                        link="https://www.inhousesolutions.com/2016/11/mac-formula-electric-turning-designs-into-reality/"
                        date="November 28, 2016"
                        title="MAC Formula Electric – Turning Designs into Reality"
                        message="Read Article"
                        image={inhousePhoto}
                    />
                </div>
            </div>
        </div>
    )
}

export default News
