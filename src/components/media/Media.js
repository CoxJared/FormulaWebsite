
import React, {Component} from 'react';
import './Media.css';

export class Media extends Component  {
    render(){
        return (
            <a className="events-event" href={this.props.link} target="_blank" rel="noopener noreferrer">
                <div className="events-event-image-container">   
                    <h1 className="hidden-view-article-header">{this.props.message}</h1>  
                    <img className="events-event-image" src={this.props.image} alt="media"/>  
                </div>
                <div className="events-event-date">
                    <h1 className="events-event-date-header">{this.props.date}</h1>
                </div>
                <div className="events-event-description-container">
                    <p className="events-event-description">
                        {this.props.title}
                    </p>
                    {this.props.label !=null ?<p className="events-event-label">
                        {this.props.label}
                    </p> : <></>}
                    
                    <p className="events-event-link-header">
                        {this.props.linkheader}
                    </p>
                </div>
            </a>
        )
    }
}

export default Media
