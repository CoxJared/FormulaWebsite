import React, {Component} from 'react';
import Header from '../../layout/header/Header';
import MainShowcase from './mainshowcase/MainShowcase';
import AboutUs from './aboutus/AboutUs';
import Footer from '../../layout/footer/Footer';
import News from './news/News';
import Events from './events/Events';
import WhatWeDo from './whatwedo/WhatWeDo';
import WhyElectric from './whyelectric/WhyElectric';

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      } 
      
    render() {
        return (
            <div style={{height:'auto',overflow:'hidden'}}>
                <Header />
                <MainShowcase />
                 <AboutUs />
                 <Events />
                 <WhatWeDo />
                 <WhyElectric />
                 <News />
                <Footer />
            </div>
        );
    }
}

export default Home;