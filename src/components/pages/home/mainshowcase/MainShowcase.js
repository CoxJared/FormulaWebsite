import React, { Component } from 'react';
import './MainShowcase.scss';
import { Link } from 'react-router-dom';
class MainShowcase extends Component {

    componentDidMount (){
        window.addEventListener("load", () => {
            document.querySelector("body").classList.add("loaded"); 
           });
    }

    render() {
        return (
            
            <div className="showcase-container" >
                <div className="showcase">
                    <img />
                    
                    <h1 className="team-name">INSPIRING A CULTURE OF INNOVATION</h1>
                    <div className="culture-container">
                        <h3 className="culture-text">A multidisciplinary project that brings together the most passionate students to work towards a common goal.</h3>
                    </div>
                    <Link to='recruitment'>
                        <button className='showcase-apply-now-button'>Apply Now</button></Link>
                </div>
            </div>
         
        )
    }
}

export default MainShowcase;
