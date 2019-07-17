import React, { Component } from 'react';
import './../TeamMembers.scss';
import jessieshot from './../../../../../../../img/headshots/jessie.png';
import scottshot from './../../../../../../../img/headshots/scott.png';
import jaredshot from './../../../../../../../img/headshots/me.jpg';
import blaireshot from './../../../../../../../img/headshots/blaire.png';
import dylanshot from './../../../../../../../img/headshots/dylan.png';
import harjotshot from './../../../../../../../img/headshots/harjot.png';
export class BusinessMembers2019 extends Component {
    state = {
        members: [
            {
                id: 1,
                name: 'Jessie Boudreau',
                title: 'Team Captain'
            },
            {
                id: 2,
                name: 'Scott Sutherland',
                title: 'Electrical Captain'
            },
            {
                id: 3,
                name: 'Jared Cox',
                title: 'Mechanical Captain'
            },
            {
                id: 4,
                name: 'Blaire Pauli',
                title: 'Mechanical captain'
            },
            {
                id: 5,
                name: 'Dylan Boudreau',
                title: 'Mechanical Captain'
            },
            {
                id: 6,
                name: 'Harjot Nijjar',
                title: 'Electrical Captain'
            }
        ]
    }


    render() {
        return (
            <div className="width-restricter-team">
            <div className="members-container">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="member-container">
                    <div className="member">
                        <img className="headshot"src={jessieshot} alt={this.state.members[0].id} /> 
                        <h1 className="name">{this.state.members[0].name}</h1>
                        <h2 className="title">{this.state.members[0].title}</h2>
                        <div className="links-container">
                            <ul className="links-list">
                                <li className="linkedin"><a href="#" class="fa fa-linkedin"></a></li> 
                                <li className="github"><a href="#" class="fa fa-github"></a></li> 
                                <li className="twitter"><a href="#" class="fa fa-twitter"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="member-container">
                    <div className="member">
                        <img className="headshot"src={jaredshot} alt={this.state.members[2].id} /> 
                        <h1 className="name">{this.state.members[2].name}</h1>
                        <h2 className="title">{this.state.members[2].title}</h2>
                        <div className="links-container">
                            <ul className="links-list">
                            <li className="linkedin"><a href="#" class="fa fa-linkedin"></a></li> 
                                <li className="github"><a href="#" class="fa fa-github"></a></li> 
                                <li className="twitter"><a href="#" class="fa fa-twitter"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="member-container">
                    <div className="member">
                        <img className="headshot"src={blaireshot} alt={this.state.members[3].id} /> 
                        <h1 className="name">{this.state.members[3].name}</h1>
                        <h2 className="title">{this.state.members[3].title}</h2>
                        <div className="links-container">
                            <ul className="links-list">
                            <li className="linkedin"><a href="#" class="fa fa-linkedin"></a></li> 
                                <li className="github"><a href="#" class="fa fa-github"></a></li> 
                                <li className="twitter"><a href="#" class="fa fa-twitter"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="member-container">
                    <div className="member">
                        <img className="headshot"src={dylanshot} alt={this.state.members[4].id} /> 
                        <h1 className="name">{this.state.members[4].name}</h1>
                        <h2 className="title">{this.state.members[4].title}</h2>
                        <div className="links-container">
                            <ul className="links-list">
                            <li className="linkedin"><a href="#" class="fa fa-linkedin"></a></li> 
                                <li className="github"><a href="#" class="fa fa-github"></a></li> 
                                <li className="twitter"><a href="#" class="fa fa-twitter"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="member-container">
                    <div className="member">
                        <img className="headshot"src={harjotshot} alt={this.state.members[5].id} /> 
                        <h1 className="name">{this.state.members[5].name}</h1>
                        <h2 className="title">{this.state.members[5].title}</h2>
                        <div className="links-container">
                            <ul className="links-list">
                            <li className="linkedin"><a href="#" class="fa fa-linkedin"></a></li> 
                                <li className="github"><a href="#" class="fa fa-github"></a></li> 
                                <li className="twitter"><a href="#" class="fa fa-twitter"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default BusinessMembers2019
