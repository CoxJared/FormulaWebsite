import React, { Component } from 'react';
import Header from '../../layout/header/Header';
import SectionSelector from './recruitmentpageselector/RecruitmentPageSelector';
import RecrruitmentPositions from './recruitmentpositions/RecrruitmentPositions';
import RecruitmentInfo from './recruitmentinfo/RecruitmentInfo';
import Footer from '../../layout/footer/Footer';

export class Recruitment extends Component {

    constructor (props){
        super(props);
        this.state = {
            page: "positions"   
        }
    }

    updatePage = (newPage) => {
        this.setState({page: newPage})
    }

    render() {
        if(this.state.page==="positions")
        {
        return (
            <div>
                <Header 
                page="recruitment"/>
                <SectionSelector 
                page={this.state.page}
                updatePage={this.updatePage} />
                <RecrruitmentPositions />    
                <Footer />
            </div>
        )
        }
        return (
            <div>
                <Header 
                page="recruitment"/>
                <SectionSelector 
                page={this.state.page}
                updatePage={this.updatePage}
                />
                <RecruitmentInfo />
                <Footer />
            </div>
        )
    }
}

export default Recruitment
