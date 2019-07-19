import React, { Component } from '../../../../../node_modules/react';
import './SponsorsContainer.scss';
import SponsorExplorer from '../sponsorexplorer/SponsorExplorer';
import BecomeSponsor from '../becomesponsor/BecomeSponsor';

export class SponsorsContainer extends Component {
    render() {
        return (
            <div className="sponsor-container">
                <div className="explorer">
                    <SponsorExplorer />
                </div>
                <div className="become-sponsor">
                    <BecomeSponsor />
                </div>
            </div>
        )
    }
}

export default SponsorsContainer
