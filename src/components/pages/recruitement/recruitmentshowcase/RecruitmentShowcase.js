import React, { Component } from 'react';
import './RecruitmentShowcase.css';

export class RecruitmentShowcase extends Component {


    render() {  
        
        return (
            <div className="recruitment-showcase-container">
                <div className="recruitment-showcase">
                    <h1 className="join-us-name">{this.props.recruitmenttitle}</h1>
                    <p className="join-us-paragraph">{this.props.para}</p>
                    
                    {this.props.button}
                    <img className="recruitment-background-image" src={this.props.backgroundimage}/>
                </div>
            </div>
        )
    }
}

export default RecruitmentShowcase
