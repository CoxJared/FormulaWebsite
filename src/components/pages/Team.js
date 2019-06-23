import React, { Component } from 'react';
import Header from './../layout/Header';

export class Team extends Component {
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

export default Team
