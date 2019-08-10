import React, { Component } from 'react';
import Header from '../../layout/header/Header';
import SectionSelector from './recruitmentpageselector/RecruitmentPageSelector';
import RecrruitmentPositions from './recruitmentpositions/RecrruitmentPositions';
import RecruitmentInfo from './recruitmentinfo/RecruitmentInfo';
import Footer from '../../layout/footer/Footer';
import './Recruitment.css';

export class Recruitment extends Component {

    constructor (props){
        super(props);
        this.state = {
            page: "about"   
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
                <div className="recruitment-page-container">
                <SectionSelector 
                page={this.state.page}
                updatePage={this.updatePage} />
                <RecrruitmentPositions />    
                </div>
                <Footer />
            </div>
        )
        }
        return (
            <div >
                
                <Header 
                page="recruitment"/>
                <div className="recruitment-page-container">
                {/* <SectionSelector 
                page={this.state.page}
                updatePage={this.updatePage}
                /> */}
                <RecruitmentInfo />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Recruitment
