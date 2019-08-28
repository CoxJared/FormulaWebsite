import React, {Component} from 'react';
import './SponsorsContainer.scss';
import SponsorExplorer from '../sponsorexplorer/SponsorExplorer';
import BecomeSponsor from '../becomesponsor/BecomeSponsor';
import imageTocheck from './../../../../img/sponsor-background.jpg';
import { Link } from 'react-router-dom';
import { compileFunction } from 'vm';

export class  SponsorsContainer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div className="sponsor-container">
            
                                <div className="sponsor-showcase">
                        <h1 className="sponsor-header">Sponsorship Opportunities</h1>
                        <p className="sponsor-showcase-para">MAC Formula Electric looks forward to the possibilty of a partnership with companies looking to contribute to student engineering competitions. We feel that the experience which our team members gain from the team make them very well rounded employees for future careers.</p>
                        <Link to="/donate" className="sponsorshowcase-button donate-button">Donate Now</Link>
                        <Link to="/contact" className="sponsorshowcase-button contact-button">Contact Us</Link>
                    </div>
            <div className="explorer">
                <SponsorExplorer />
                <img src={imageTocheck} style={{height:'0', width:'0', opacity:'0'}} onLoad={this.props.imageLoaded} />
            </div>
        </div>
    )
        }
}

export default SponsorsContainer
