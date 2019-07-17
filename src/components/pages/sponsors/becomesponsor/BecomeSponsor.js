import React, { Component } from 'react';
import './BecomeSponsor.scss';

export class BecomeSponsor extends Component {
    render() {
        return (
            <div className="width-restricter">
            <div className="become-sponsor-container">
                <h1 className="become-sponsor-header">Sponsorship Opportunites</h1>
                <p className="become-sponsor-paragraph">
                   MAC Formula Electric looks forward to the possibilty of a partnership with companies looking to contribute to student engineering competitions. We feel that the experience which our team members gain from the team make them very well rounded employees for future careers.
                </p>
                <button className="sponsor-package">Donate Now</button>
            </div>
            </div>
        )
    }
}

export default BecomeSponsor
