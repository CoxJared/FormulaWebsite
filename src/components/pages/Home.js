import React, {Component} from 'react';
import Header from './../layout/Header';
import MainShowcase from '../layout/MainShowcase';


class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainShowcase />
            </div>
        );
    }
}

export default Home;