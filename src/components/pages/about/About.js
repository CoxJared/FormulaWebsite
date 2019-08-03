import React, { Component } from 'react';
import Header from '../../layout/header/Header';
import SeasonPicker from './seasonpicker/SeasonPicker';
import SectionPicker from './sectionpicker/SectionPicker';
import Footer from '../../layout/footer/Footer';

import Overview2018 from './overview/overview2018/Overview2018';
import Overview2019 from './overview/overview2019/Overview2019';
import Design2019 from './design/design2019/Design2019';
import Overview2020 from './overview/overview2020/Overview2020';
import Design2020 from './design/design2020/Design2020';
import Team from './team/Team';


export class About extends Component {
    constructor (props){
        super(props)
        this.state = {
            section: "overview",
            season: "2019",  
            displayWindow:  {
                "2018":
                {
                    "overview": <Overview2018 />,
                    "design": <Overview2018 />,
                    "team": <Team season="2018" 
                            refreshTeam={this.refreshTeam}/>
                },
                "2019":
                {
                    "overview": <Overview2019 />,
                    "design": <Design2019 />,
                    "team": <Team season="2019" 
                    refreshTeam={this.refreshTeam}/>
                },
                "2020":
                {
                    "overview": <Overview2020 />,
                    "design": <Design2020 />,
                    "team": <Team season="2020"
                    refreshTeam={this.refreshTeam}/>
                }   
        }
    }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      } 
    updateSection = (newSection) => {
        this.setState({section: newSection})
    }
    updateSeason = (newSeason) => {
        this.setState({season: newSeason})
    }
    refreshTeam = () => {
        window.scrollTo(0, 0)
        this.setState(this.state);
    }

    render() {
        if(this.state.season ==="2018" && (this.state.section === "design" || this.state.section === 'overview')){
            this.setState({section:"team"})
        }
        if(this.state.season==="2020" && this.state.section==="design"){
            this.setState({section:"overview"})
        }
        return (
            <div>
                <Header page="about"/>
                <SeasonPicker 
                 season={this.state.season}
                 updateSeason={this.updateSeason}
                 />
                 <SectionPicker 
                 section={this.state.section}
                 updateSection={this.updateSection}
                 season={this.state.season}
                 />
                
                 {this.state.displayWindow[this.state.season][this.state.section]}
                 <Footer />
                 
            </div>
        )
    }
}

export default About
