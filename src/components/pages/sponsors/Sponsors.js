import React, { Component } from 'react';
import Header from '../../layout/header/Header';
import SponsorsContainer from './sponsorscontainer/SponsorsContainer';
import Footer from '../../layout/footer/Footer';


import './Sponsors.css';

export class Sponsors extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    render() {
        return (
            <div>
                <Header page="sponsors"/>

                <SponsorsContainer />
                <Footer />
            </div>
        )
    }
}

export default Sponsors
