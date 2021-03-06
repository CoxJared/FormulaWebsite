import React, { Component } from 'react';
import Header from '../../components/header/Header';
import SponsorsContainer from './sponsorscontainer/SponsorsContainer';
import Footer from '../../components/footer/Footer';


import './Sponsors.css';
import LoadingSpinner from '../../components/loadingspinner/LoadingSpinner';

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
                {/* {this.state.loadingElement} */}
                <Header page="sponsors"/>

                <SponsorsContainer 
                imageLoaded={this.imageLoaded}/>
                <Footer />
            </div>
        )
    }
}

export default Sponsors
