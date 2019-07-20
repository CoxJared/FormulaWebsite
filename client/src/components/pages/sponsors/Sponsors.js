import React, { Component } from '../../../../node_modules/react';
import Header from '../../layout/header/Header';
import SponsorsContainer from './sponsorscontainer/SponsorsContainer';
import Footer from '../../layout/footer/Footer';

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
