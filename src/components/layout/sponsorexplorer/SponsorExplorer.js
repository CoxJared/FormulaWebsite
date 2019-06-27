import React, { Component } from 'react';
import GmLogo from './../../../img/sponsor-logos/gm-logo.png';

export class SponsorExplorer extends Component {
    state = {
        platinum: [
            {
                id: 1,
                name: 'GM',
                websiteLink: 'https://www.gm.ca/en/home.html'
            },
            {
                id: 2,
                name: 'Brusa',
                websiteLink: 'https://www.brusa.biz/en.html'
            },
            {
                id: 3,
                name: 'DSpace',
                websiteLink: 'https://duraspace.org/dspace/'
            },
            {
                id: 4,
                name: 'Ansys',
                websiteLink: 'https://www.ansys.com/'
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
                <div>
                    <img className="logo"></img>
                    <h1>{this.state.platinum[0].name}</h1>
                </div>
                <div>

                </div>
                </div>
            </div>
        )
    }
}

export default SponsorExplorer
