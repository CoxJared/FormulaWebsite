import React, { Component } from 'react';
import './SponsorExplorer.css';
import AdvancedcircuitsLogo from './../../../img/sponsor-logos/advancedcircuits-logo.png';
import AirtechLogo from './../../../img/sponsor-logos/airtech-logo.png';
import AltiumLogo from './../../../img/sponsor-logos/altium-logo.png';
import AlpineLogo from './../../../img/sponsor-logos/alpine-logo.png';
import AltairLogo from './../../../img/sponsor-logos/altair-logo.jpeg';
import AmkLogo from './../../../img/sponsor-logos/amk-logo.svg';
import AnsysLogo from './../../../img/sponsor-logos/ansys-logo.png';
import ApexcompositesLogo from './../../../img/sponsor-logos/apex compositew.jpeg';
import BarrdayLogo from './../../../img/sponsor-logos/barrday-logo.jpeg';
import BenderLogo from './../../../img/sponsor-logos/bender-logo.jpg';
import BrusaLogo from './../../../img/sponsor-logos/brusa-logo.png';
import CartesianLogo from './../../../img/sponsor-logos/cartesian-logo.png';

export class SponsorExplorer extends Component {
    state = {
        platinum: [
            {
                id: 1,
                name: 'Advanced Circuits',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: AdvancedcircuitsLogo
            },
            {
                id: 2,
                name: 'Airtech',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: AirtechLogo
            },
            {
                id: 3,
                name: 'Altium',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: AltiumLogo
            },
            {
                id: 4,
                name: 'Alpine',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: AlpineLogo
            },
            {
                id: 5,
                name: 'Altair',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: AltairLogo
            },
            {
                id: 6,
                name: 'AMK',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: AmkLogo
            },
            {
                id: 7,
                name: 'Ansys',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: AnsysLogo
            },
            {
                id: 8,
                name: 'Apex Composites',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: ApexcompositesLogo
            },
            {
                id: 9,
                name: 'Barrday',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: BarrdayLogo
            },

            
        ]
    }

    render() {
        return (
            <div className="sponsor-contanainer">
                <div className="platinum">
                    <div className="sponsor">
                        <img className="logo" src={this.state.platinum[0].img} />
                        <h1>{this.state.platinum[0].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.platinum[1].img} />
                        <h1>{this.state.platinum[1].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.platinum[2].img} />
                        <h1>{this.state.platinum[2].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.platinum[3].img} />
                        <h1>{this.state.platinum[3].name}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default SponsorExplorer
