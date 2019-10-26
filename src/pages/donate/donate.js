import React, { Component } from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import TierSelector from './tierselector/TierSelector';

import './donate.css';
import imageTocheck from './../../img/team-photo.jpg';
import { bigIntLiteral } from '@babel/types';


export class donate extends Component {

    constructor(){
        super()
        this.state={
            section:""
        }
    }

    updateSection = (newSection) => {
        this.setState({section: newSection})
    }

    render() {

        let info={range:"", 
        benefits:[]}

        switch(this.state.section){
            case "Title":
                info.range=">$10,000"
                info.benefits=["Featured Promotional Video", "Company Information Session", "Meet the Team", "Logo on Team T-Shirts", "Job Promotion & Resume Bank", "Featured Logo on Team Website", "Multiple Large Vehicles on Vehicle"]
                break;
            case "Platinum":
                    info.range=">$5,000"
                    info.benefits=["Company Information Session", "Meet the Team", "Logo on Team T-Shirts", "Job Promotion & Resume Bank", "X-Large Logo on Team Website", "Large Vehicles on Vehicle"]
                    break;
            case "Gold":
                info.range=">$2,000"
                info.benefits=["Meet the Team", "Logo on Team T-Shirts", "Job Promotion & Resume Bank", "X-Large Logo on Team Website", "Medium Logo Vehicles on Vehicle"]
                break;
            case "Silver":
                info.range=">$1,000"
                info.benefits=["Logo on Team T-Shirts", "Job Promotion & Resume Bank", "Medium Logo on Team Website", "Small Vehicles on Vehicle"]
                break;
            case "Bronze":
                info.range=">$500"
                info.benefits=["Job Promotion & Resume Bank", "Small Logo on Team Website"]
                break;
            default:
                break;

        }

                
        
        let infoBlock = this.state.section === ""?
            <div className="why-donate-paragraph-container">
                <p className="why-donate-paragraph">With the ambitious goals the team has set, the use of advanced materials, manufacturing techniques, and components are vital to success. Due to the nature of the relatively new electric vehicle industry, many of the technologies being implemented into the car are also new. In general, this means low volume at a high cost. By donating to the team, you will be providing us with the resources necessary to turn our designs into reality.
                By donating you will not only be helping build a car; you will be investing in the next generation of engineers, entrepreneurs, and leaders.</p>
            </div>
            :
            <div className="sponsor-tier-info-container">
                <h1 className="sponsor-tier-name">{this.state.section} Sponsorship</h1>
                <h1 className="sponsor-tier-range"> {info.range}</h1>
                <h1 className="sponsor-tier-benefits-header">Benefits:</h1>
                <ul className="sponsor-tier-benefits-list">
                    {info.benefits.map(benefit  => (
                        <li className="sponsor-tier-benefits-item">{benefit}</li>
                    ))}
                    
                </ul>
            </div>
        
            return (
                <div>
                    <Header page="donate"/>
                    <div className="why-donate-container-page">

                        <div className="why-donate-showcase">
                            <h1 className="why-donate-header">2019-2020 Season Campaign</h1>
                            {/* <button className="view-tiers-button" onClick={this.showTiers}>Donate</button> */}
                            {/* <a href="https://www.paypal.com/cgi-bin/webscr" target='_blank' className="sponsorshowcase-button package-button">Sponsorship Package</a> */}

                            <div className="status-container">

                                <h1 className="goal-header">$50,000.00</h1>
                                <div className="status-bar-container">
                                    <div className="status-bar">
                                        <h1 className="status-value">$4,565.00</h1>
                                    </div>
                                    <div className={`contribution ${this.state.section}`} />
                                </div>
                                <h1 className="last-updated-header">Last Updated: October 26</h1>

                            </div>

                            <div className="donate-button-container">
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                <input className="hide-donate-info" type="hidden" name="cmd" value="_s-xclick" />
                                <input className="hide-donate-info" type="hidden" name="hosted_button_id" value="Z3DJQPG5RY7RQ" />
                                <input className="hide-donate-info" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                <img  className="hide-donate-info" alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
                                <button className="donate-now-button" onClick={this.showTiers}>Donate</button>
                                </form>
                            </div>
                        </div>
                    <TierSelector 
                    updateSection={this.updateSection}
                    section={this.state.section}/>
                    </div>
                    {infoBlock}
                    <img src={imageTocheck} style={{height:'0', width:'0', opacity:'0'}} onLoad={this.imageLoaded} />
                    <Footer/>
                </div>
            )
        }
}

export default donate
