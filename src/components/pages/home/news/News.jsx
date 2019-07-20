import React, { Component } from 'react';
import './News.scss';

export class Media extends Component {
    render() {
        return (
            <div className="width-restricter">
            <div className="news-container">
                <div className="news-title-container">
                    <h1 className="news-title">News</h1>
                </div>

                <div className="news-events">

                    <a href="https://www.inhousesolutions.com/2016/11/mac-formula-electric-turning-designs-into-reality/" target="_blank" rel="noopener noreferrer">
                    <div className="news-event">
                        <div className="news-event-image-3">
                            <h1 className="hidden-view-article-header">Read Article</h1>
                        </div>
                        <div className="news-event-date">
                            <h1 className="news-event-date-header">April 10, 2019</h1>
                        </div>
                        <div className="news-event-description-container">
                            <p className="news-event-description">
                                University students can now earn badges to recognize their merits
                            </p>
                        </div>
                    </div>
                    </a>

                    <a href="https://www.pcbway.com/project/sponsor/Body_Control_Module_PCB___MAC_Formula_Electric.html" target="_blank" rel="noopener noreferrer">
                    <div className="news-event">
                        <div className="news-event-image-2">
                        <h1 className="hidden-view-article-header">Read Article</h1>
                        </div>
                        <div className="news-event-date">
                            <h1 className="news-event-date-header">March 4, 2019</h1>
                        </div>
                        <div className="news-event-description-container">
                            <p className="news-event-description">
                                Body Control Module PCB - MAC Formula Electric
                            </p>
                        </div>
                    </div>
                    </a>
                    

                    <a href="https://www.macleans.ca/education/university-students-can-now-earn-badges-to-recognize-their-merits/" target="_blank" rel="noopener noreferrer">
                    <div className="news-event hidden-full">
                        <div className="news-event-image-1">
                        <h1 className="hidden-view-article-header">Read Article</h1>
                        </div>
                        <div className="news-event-date">
                            <h1 className="news-event-date-header">November 28, 2016</h1>
                        </div>
                        <div className="news-event-description-container">
                            <p className="news-event-description">
                                    MAC Formula Electric – Turning Designs into Reality
                            </p>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
            </div>
        )
    }
}

export default Media
