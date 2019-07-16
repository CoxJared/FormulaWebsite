import React, { Component } from 'react';
import Header from '../../layout/header/Header';
import SeasonPicker from './seasonpicker/SeasonPicker';
import SectionPicker from './sectionpicker/SectionPicker';
import Footer from './../../layout/footer/Footer';


import Overview2019 from './overview/overview2019/Overview2019';
import Design2019 from './design/design2019/Design2019';
import Overview2020 from './overview/overview2020/Overview2020';
import Design2020 from './design/design2020/Design2020';
import Team2019 from './team/team2019/Team2019';
import Team2020 from './team/team2020/Team2020';

const displayWindow = {
    "2019":
    {
        "overview": <Overview2019 />,
        "design": <Design2019 />,
        "team": <Team2019 />
    },
    "2020":
    {
        "overview": <Overview2020 />,
        "design": <Design2020 />,
        "team": <Team2020 />
    }
}

export class About extends Component {
    constructor (props){
        super(props)
        this.state = {
            section: "overview",
            season: "2019",      
        }
    }

    updateSection = (newSection) => {
        this.setState({section: newSection})
    }
    updateSeason = (newSeason) => {
        this.setState({season: newSeason})
    }

    render() {
        return (
            <div>
                <Header />
                 <SectionPicker 
                 section={this.state.section}
                 updateSection={this.updateSection}
                 />
                 <SeasonPicker 
                 season={this.state.season}
                 updateSeason={this.updateSeason}
                 />
                 {displayWindow[this.state.season][this.state.section]}
                 <Footer />
            </div>
        )
    }
}

export default About