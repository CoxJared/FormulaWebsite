import React, { Component } from 'react';
import Header from '../../layout/header/Header';
import SponsorExplorer from './sponsorexplorer/SponsorExplorer';
import Footer from './../../layout/footer/Footer';

export class Sponsors extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    render() {
        return (
            <div>
                <Header />
                <SponsorExplorer />
                <Footer />
            </div>
        )
    }
}

export default Sponsors