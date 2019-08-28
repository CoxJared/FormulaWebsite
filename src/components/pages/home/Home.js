import React, {Component} from 'react';
import Header from '../../layout/header/Header';
import MainShowcase from './mainshowcase/MainShowcase';
import AboutUs from './aboutus/AboutUs';
import Footer from '../../layout/footer/Footer';
import News from './news/News';
import Events from './events/Events';
import WhatWeDo from './whatwedo/WhatWeDo';
import WhyElectric from './whyelectric/WhyElectric';
import LoadingSpinner from '../../layout/loadingspinner/LoadingSpinner';

class Home extends Component {
    constructor (){
        super()

        this.state={
            loaded:true,
            loadingElement:<LoadingSpinner/>}
    }

    

    componentDidMount() {
        window.scrollTo(0, 0)
      } 

    showcaseLoaded= () => {
        this.setState({loaded:true,
        loadingElement:<div/>})
    }

      
    render() {


            return (
                <div style={{height:'auto',overflow:'hidden'}}>
                    {this.state.loadingElement}
                    <Header />
                    <MainShowcase showcaseLoaded={this.showcaseLoaded}/>
                    <AboutUs />
                    <Events />
                    <WhatWeDo />
                    
                    <WhyElectric />
                    <News />
                    <Footer />
                </div>
        )}
    }


export default Home;