import React, { Component } from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import TierSelector from './tierselector/TierSelector';

import './donate.css';
import imageTocheck from './../../img/team-photo.jpg';

import teamphoto from './../../img/team-photo.jpg';
import mcmasterlogo from './../../img/mcmaster-logo.png';
import fsaelogo from './../../img/fsae-logo.png';


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
                info.benefits=["Featured Promotional Video", "Company Information Session", "Meet the Team", "Logo on Team T-Shirts", "Job Promotion & Resume Bank", "Featured Logo on Team Website", "Multiple Large Logos on Vehicle"]
                break;
            case "Platinum":
                    info.range=">$5,000"
                    info.benefits=["Company Information Session", "Meet the Team", "Logo on Team T-Shirts", "Job Promotion & Resume Bank", "X-Large Logo on Team Website", "Large Logo on Vehicle"]
                    break;
            case "Gold":
                info.range=">$2,000"
                info.benefits=["Meet the Team", "Logo on Team T-Shirts", "Job Promotion & Resume Bank", "X-Large Logo on Team Website", "Medium Logo on Vehicle"]
                break;
            case "Silver":
                info.range=">$1,000"
                info.benefits=["Logo on Team T-Shirts", "Job Promotion & Resume Bank", "Medium Logo on Team Website", "Small Logo on Vehicle"]
                break;
            case "Bronze":
                info.range=">$500"
                info.benefits=["Job Promotion & Resume Bank", "Small Logo on Team Website"]
                break;
            case "Contributor":
                info.range="<$500"
                info.benefits=["Recognition displayed on Website"]
                break;
            default:
                break;

        }

                
        
        let infoBlock = this.state.section === ""?
            <div className="why-donate-paragraph-container">

                <div className="how-to-donate-section">
                <h1 className="overview-heading-how-to">
                    How To Donate
                </h1>
                    <ol className="numbered-steps">
                        <li className="numbered-step">Review the sponsorship tier options and benefits by selecting one of the tabs above</li>
                        <li className="numbered-step">Determine your method of payment
                            <ul className="payment-method-list">
                                <li className="payment-option">a) If you wish to use <b>PayPal secure Transaction</b>, select the donate button above and you will be redirected</li>
                                <li className="payment-option">b) If you wish to use <b>Interac e-Transfer</b>, send all transactions to formula@mcmaster.ca</li>
                                <li className="payment-option">c) If you wish to send a <b>cheque or cash</b>, review the following
                                    <ul className="cash-or-cheque-list">
                                        <li className="cash-or-cheque-option">i) Make all cheques payable to "MAC Formula Electric"</li>
                                        <li className="cash-or-cheque-option">ii) Mail cheques to:
                                            <ul className="address-list">
                                                <li className="address-option">MAC Formula Electric</li>
                                                <li className="address-option">1280 Main Street West, JHE-H104</li>
                                                <li className="address-option">Hamilton ON, L8S 4L8</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        
                        </li>
                    </ol>


                </div>

                <h1 className="overview-heading">
                    About Us
                </h1>
                <p className="overview-para">
                MAC Formula Electric is a student run team from McMaster University that designs, builds, and competes with an open wheel, formula one-style electric racecar. Competitions include dynamic, business, cost and design events. Our design boasts a fully electric all-wheel drive powertrain, full carbon fiber chassis, aerodynamics package and advanced vehicle controls.  
                </p>
                <p className="overview-para">
                We celebrate and support a multidisciplinary team consisting of about 100 members from various backgrounds. We provide students with the opportunity to work on the bleeding edge of automotive technology while we aim to stake our claim as one of the top ranked teams in Canada! 
                </p>

                <h1 className="overview-heading">
                    How Does Your Donation Help? 
                </h1>
                <p className="overview-para">
                With the ambitious goals the team has set, the use of advanced materials, manufacturing techniques, and components are vital to success. Due to the nature of the relatively new electric vehicle industry, many of the technologies being implemented into the car are also new. In general, this means low volume at a high cost. By donating to the team, you will be providing us with the resources necessary to turn our designs into reality. By donating you will not only be helping build a car; you will be investing in the next generation of engineers, entrepreneurs, and leaders.  
                </p>
                <h1 className="overview-heading">
                    The Team
                </h1>
                <img className="overview-team-photo" src={teamphoto} />
                <p className="overview-para">
                MAC Formula Electric is a completely extracurricular team. This means that it naturally attracts some of the most dedicated, driven students and provides them with experience in all levels of an engineering business. From project management and design, to manufacturing and testing, this project immerses students in the industry and as a result they leave university with a superior knowledge base. The chance to communicate directly with professionals is not only a great experience for students to develop their soft skills, but also a fantastic way to learn what the electric vehicle industry is truly about. Members are incredibly passionate about the learning opportunities inherent in applying their studies to real-life problems and design challenges. Working in this setting makes students well-rounded candidates for jobs after graduation.  
                </p>
                <h1 className="overview-heading">
                    The Competition
                </h1>
                <p className="overview-para">
                    FSAE North America
                </p>
                <ul className="competition-list">
                    <li className="competition-item">
                    Formula SAE California (Summer 2020) 
                    </li>
                    <li className="competition-item">
                    Formula SAE North (Summer 2020) 
                    </li>
                </ul>
                <img className="school-logo" src={mcmasterlogo}></img>
                <img className="fsae-logo" src={fsaelogo}/>

                <h1 className="overview-heading">
                    Vision
                </h1>
                <p className="overview-para">
                The Formula Student Electric competition is currently dominated by teams from Europe. MAC Formula Electric aims to put a North American team in the top 10 of the world rankings.
                </p>
                <h1 className="overview-heading">
                    Technology
                </h1>
                <p className="overview-para">
                The MAC Formula Electric team prides itself for being on the cutting edge of motorsport technology by implementing techniques and design features which are rarely seen in anything other than premier racing series. The use of CNC machinery and CAD modelling as well as various FEA and simulation softwares has allowed the team to detail, design, and analyze every portion of the car to the smallest elements. Taking full advantage of all the opportunities presented, the team can design McMaster University's best performing car to date.
                </p>



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
                            <h1 className="why-donate-header">2020 Campaign</h1>
                            <div className="status-container">

                                <h1 className="goal-header">$40,000.00</h1>
                                <div className="status-bar-container">
                                    <div className="status-bar">
                                        <h1 className="status-value">$0.00</h1>
                                    </div>
                                    <div className={`contribution ${this.state.section}`} >
                                        {/* {this.state.section === "" ? <div /> : <h1 className="contribution-value">{this.state.section} Contribution</h1>}   */}
                                        <h1 className="contribution-value">{info.range}</h1>
                                    </div>
                                </div>
                                <h1 className="last-updated-header">Last Updated: October 30</h1>

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
