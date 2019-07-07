import React, { Component } from 'react';
import './SponsorExplorer.css';

import AirtechLogo from './../../../../img/sponsor-logos/airtech-logo.png';
import AltiumLogo from './../../../../img/sponsor-logos/altium-logo.png';
import AltairLogo from './../../../../img/sponsor-logos/altair-logo.jpeg';
import AmkLogo from './../../../../img/sponsor-logos/amk-logo.svg';
import BenderLogo from './../../../../img/sponsor-logos/bender-logo.jpg';
import CartesianLogo from './../../../../img/sponsor-logos/cartesian-logo.png';
import CpaontarioLogo from './../../../../img/sponsor-logos/cpaontario-logo.png'
import DiabLogo from './../../../../img/sponsor-logos/diab-logo.jpeg';
import DspaceLogo from './../../../../img/sponsor-logos/dspace_logo.jpg';
import EnlitenenergyServicesLogo from './../../../../img/sponsor-logos/enlitenenergyservices-logo.png';
import FastenalLogo from './../../../../img/sponsor-logos/fastenal-logo.png';
import Fmslogo from './../../../../img/sponsor-logos/fms-logo.png';
import GeneralsealantsLogo from './../../../../img/sponsor-logos/generalsealants-logo.png';
import GmLogo from './../../../../img/sponsor-logos/gm-logo.png';
import LinimarLogo from './../../../../img/sponsor-logos/linimar-logo.png';
import MathworksLogo from './../../../../img/sponsor-logos/mathworks-logo.jpeg';
import MclarenengineeringLogo from './../../../../img/sponsor-logos/mclarenengineering-logo.jpg';
import McmasterengineeringLogo from './../../../../img/sponsor-logos/mcmasterengineering-logo.jpg';
import MesLogo from './../../../../img/sponsor-logos/mes-logo.png';
import MscSoftwareLogo from './../../../../img/sponsor-logos/mscsoftware-logo.png';
import OctopuzLogo from './../../../../img/sponsor-logos/octopuz-logo.jpg'
import SolidworksLogo from './../../../../img/sponsor-logos/solidworks-logo.jpg';
import SamuelLogo from './../../../../img/sponsor-logos/samuel-logo.gif';
import TeLogo from './../../../../img/sponsor-logos/teconnectivity-logo.png';
import TextremLogo from './../../../../img/sponsor-logos/textreme-logo.png';
import ViGradeLogo from './../../../../img/sponsor-logos/vigrade-logo.png';
import HoosierLogo from './../../../../img/sponsor-logos/hoosier-logo.png';
import OshparkLogo from './../../../../img/sponsor-logos/oshpark-logo.jpeg';
import FaroLogo from './../../../../img/sponsor-logos/faro-logo.png';

export class SponsorExplorer extends Component {
    state = {
        platinum: [
            {
                id: 0,
                name: 'GM',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: GmLogo
            },
            {
                id: 1,
                name: 'McMaster Engineering',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: McmasterengineeringLogo
            },
        ],
        gold: [
            {
                id: 0,
                name: 'Altium',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: AltiumLogo
            },
            {
                id: 1,
                name: 'AMK',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: AmkLogo
            },
            {
                id: 2,
                name: 'Dspace',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: DspaceLogo
            },
            {
                id: 3,
                name: 'Fastenal',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: FastenalLogo
            },
            {
                id: 4,
                name: 'General Sealants',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: GeneralsealantsLogo
            },
            {
                id: 5,
                name: 'Linamar',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: LinimarLogo
            },
            {
                id: 6,
                name: 'Mathworks',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: MathworksLogo
            },
            {
                id: 7,
                name: 'Mclaren Engineering',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: MclarenengineeringLogo
            },
            {
                id: 8,
                name: 'MES',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: MesLogo
            },
            {
                id: 9,
                name: 'MSC Software',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: MscSoftwareLogo
            },
            {
                id: 10,
                name: 'TE',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: TeLogo
            },
            {
                id: 11,
                name: 'Faro',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: FaroLogo
            },
        ],
        silver: [
            {
                id: 0,
                name: 'Bender',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: BenderLogo
            },
            {
                id: 1,
                name: 'Cartesian',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: CartesianLogo
            },
            {
                id: 2,
                name: 'CpaOntario',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: CpaontarioLogo
            },
            {
                id: 3,
                name: 'Diab',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: DiabLogo
            },
            {
                id: 4,
                name: 'EnLITen Energy Services',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: EnlitenenergyServicesLogo
            },
            {
                id: 5,
                name: 'FMS',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: Fmslogo
            },
            {
                id: 6,
                name: 'OCTOPUZ inc.',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: OctopuzLogo
            },
            {
                id: 7,
                name: 'Samuel',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: SamuelLogo
            },   
            {
                id: 8,
                name: 'Textreme',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: TextremLogo
            },  
            {
                id: 9,
                name: 'Hoosier',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: HoosierLogo
            },   
        ],
        software: [
            {
                id: 0,
                name: 'Solidworks',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: SolidworksLogo
            },
            {
                id: 1,
                name: 'ViGrade',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: ViGradeLogo
            },
            {
                id: 2,
                name: 'Oshpark',
                websiteLink: 'https://www.gm.ca/en/home.html',
                img: OshparkLogo
            },
        ]
    }

    render() {
        return (    
            <div className="sponsor-contanainer">
                <h1 className="platinum-heading"><span>Platinum Sponsorships</span></h1>
                <div className="platinum">
                    <div className="sponsor">
                        <img className="logo" src={this.state.platinum[0].img} />
                        <h1>{this.state.platinum[0].name}</h1>
                    </div>            
                    <div className="sponsor">
                        <img className="logo" src={this.state.platinum[1].img} />
                        <h1>{this.state.platinum[1].name}</h1>
                    </div>
                </div>
                <h1 className="gold-heading"><span>Gold Sponsorships</span></h1>
                <div className="gold">
                    <div className="sponsor">
                        <img className="logo" src={this.state.gold[0].img} />
                        <h1>{this.state.gold[0].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.gold[1].img} />
                        <h1>{this.state.gold[1].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.gold[2].img} />
                        <h1>{this.state.gold[2].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.gold[3].img} />
                        <h1>{this.state.gold[3].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.gold[4].img} />
                        <h1>{this.state.gold[4].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.gold[5].img} />
                        <h1>{this.state.gold[5].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.gold[6].img} />
                        <h1>{this.state.gold[6].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.gold[7].img} />
                        <h1>{this.state.gold[7].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.gold[8].img} />
                        <h1>{this.state.gold[8].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.gold[9].img} />
                        <h1>{this.state.gold[9].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.gold[10].img} />
                        <h1>{this.state.gold[10].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.gold[11].img} />
                        <h1>{this.state.gold[11].name}</h1>
                    </div>

                </div>
                
                <h1 className="silver-heading"><span>Silver Sponsorships</span></h1>
                <div className="silver">
                    <div className="sponsor">
                        <img className="logo" src={this.state.silver[0].img} />
                        <h1>{this.state.silver[0].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.silver[1].img} />
                        <h1>{this.state.silver[1].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.silver[2].img} />
                        <h1>{this.state.silver[2].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.silver[3].img} />
                        <h1>{this.state.silver[3].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.silver[4].img} />
                        <h1>{this.state.silver[4].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.silver[5].img} />
                        <h1>{this.state.silver[5].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.silver[6].img} />
                        <h1>{this.state.silver[6].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.silver[7].img} />
                        <h1>{this.state.silver[7].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.silver[8].img} />
                        <h1>{this.state.silver[8].name}</h1>
                    </div>
                    <div className="sponsor">
                    <img className="logo" src={this.state.silver[9].img}/>
                        <h1>{this.state.silver[9].name}</h1>
                    </div>
                </div>
                <h1 className="software-heading"><span>Software Sponsorships</span></h1>
                <div className="software">
                    <div className="sponsor">
                        <img className="logo" src={this.state.software[0].img} />
                        <h1>{this.state.software[0].name}</h1>
                    </div>
                    <div className="sponsor">
                        <img className="logo" src={this.state.software[1].img} />
                        <h1>{this.state.software[1].name}</h1>
                    </div>
                    <div className="sponsor">
                        <img className="logo" src={this.state.software[2].img} />
                        <h1>{this.state.software[2].name}</h1>
                    </div>
                </div>
            </div>
                
        )
    }
}

export default SponsorExplorer
