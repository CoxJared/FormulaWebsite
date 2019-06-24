import React, { Component } from 'react';
import Header from '../layout/header/Header';

export class Sponsors extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

export default Sponsors
