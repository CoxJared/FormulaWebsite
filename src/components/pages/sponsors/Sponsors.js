import React, { Component } from 'react';
import Header from '../../layout/header/Header';
import SponsorsContainer from './sponsorscontainer/SponsorsContainer';
import Footer from '../../layout/footer/Footer';


import './Sponsors.css';
import LoadingSpinner from '../../layout/loadingspinner/LoadingSpinner';

export class Sponsors extends Component {
    constructor(){
        super()
        this.state={
            loadingElement:<LoadingSpinner />
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    imageLoaded= () => {
        this.setState({
        loadingElement:<div/>})
    }
      
    render() {
        return (
            <div>
                {this.state.loadingElement}
                <Header page="sponsors"/>

                <SponsorsContainer 
                imageLoaded={this.imageLoaded}/>
                <Footer />
            </div>
        )
    }
}

export default Sponsors
