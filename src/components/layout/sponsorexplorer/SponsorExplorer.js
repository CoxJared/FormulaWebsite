import React, { Component } from 'react';
import './SponsorExplorer.css';
import GmLogo from './../../../img/sponsor-logos/gm-logo.png';
import BrusaLogo from './../../../img/sponsor-logos/brusa-logo.png';
import DSpaceLogo from './../../../img/sponsor-logos/dspace_logo.jpg';
import AnsysLogo from './../../../img/sponsor-logos/ansys-logo.png';


export class SponsorExplorer extends Component {
    state = {
        platinum: [
            {
                id: 1,
                name: 'GM',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: GmLogo
            },
            {
                id: 2,
                name: 'Brusa',
                websiteLink: 'https://www.brusa.biz/en.html',
                img: BrusaLogo
            },
            {
                id: 3,
                name: 'DSpace',
                websiteLink: 'https://duraspace.org/dspace/',
                img: DSpaceLogo
            },
            {
                id: 4,
                name: 'Ansys',
                websiteLink: 'https://www.ansys.com/',
                img: AnsysLogo
            },
            {
                id: 5,
                name: 'simscale',
                websiteLink: 'https://www.simscale.com/'
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
