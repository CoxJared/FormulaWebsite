import React, {Component} from 'react';
import Header from '../../layout/header/Header';
import MainShowcase from './mainshowcase/MainShowcase';
import AboutUs from './aboutus/AboutUs';
import Footer from './../../layout/footer/Footer';
import News from './news/News';
import Events from './events/Events';

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
                 <Events />
                 <News />
                <Footer />
            </div>
        );
    }
}

export default Home;