import React, {Component} from 'react';
import Header from '../../layout/header/Header';
import MainShowcase from './mainshowcase/MainShowcase';
import AboutUs from './aboutus/AboutUs';
import Footer from './../../layout/footer/Footer';
import ExtraSection from './extrasection/ExtraSection';


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
                 <ExtraSection />
                <Footer />
            </div>
        );
    }
}

export default Home;