import React from 'react';
import './BecomeSponsor.scss';
import { Link } from 'react-router-dom';

export function BecomeSponsor () {
    return (
        <div className="width-restricter">
        <div className="become-sponsor-container">
            <h1 className="become-sponsor-header">Sponsorship Opportunites</h1>
            <p className="become-sponsor-paragraph">
                MAC Formula Electric looks forward to the possibilty of a partnership with companies looking to contribute to student engineering competitions. We feel that the experience which our team members gain from the team make them very well rounded employees for future careers.
            </p>
            <Link className="sponsor-package" to="/donate">Donate Now</Link>
        </div>
        </div>
    )
}

export default BecomeSponsor
