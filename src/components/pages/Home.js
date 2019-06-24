import React, {Component} from 'react';
import Header from '../layout/header/Header';
import MainShowcase from '../layout/mainshowcase/MainShowcase';
import AboutUs from '../layout/textblocks/AboutUs';
import WhyElectric from '../layout/textblocks/WhyElectric';


class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      } 
      
    render() {
        return (
            <div>
                <Header />
                <MainShowcase />
                <AboutUs />
                <WhyElectric />
            </div>
        );
    }
}

export default Home;