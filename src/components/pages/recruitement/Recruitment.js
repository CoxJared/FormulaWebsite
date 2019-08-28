import React, { Component } from 'react';
import Header from '../../layout/header/Header';
import RecruitmentInfo from './recruitmentinfo/RecruitmentInfo';
import Footer from '../../layout/footer/Footer';
import './Recruitment.css';
import Positions from './positions/Positions';
import RecruitmentShowcase from './recruitmentshowcase/RecruitmentShowcase';

import peopleCadding from './../../../img/people-cadding.jpg';
import Position from './positions/position/Position';
import LoadingSpinner from '../../layout/loadingspinner/LoadingSpinner';

export class Recruitment extends Component {

    constructor (props){
        super(props);
        this.state = {
            page: "about",
            positionToshow:null,
            loadingElement:<LoadingSpinner />
        }
    }

    updatePage = (newPage) => {
        this.setState({page: newPage})
    }

    updatePositionPage = (showPosition) => {
        this.setState({positionToshow: showPosition })
        this.updatePage("position")
        console.log("yup")
    }

    imageLoaded= () => {
        this.setState({
        loadingElement:<div/>})
    }

    render() {

        if(this.state.page==="about"){
            return (
                <div >
                    {this.state.loadingElement}
                    <Header 
                    page="recruitment"/>
                    <div className="recruitment-page-container">
                    <RecruitmentShowcase 
                    recruitmenttitle="JOIN US"
                    updatePage={this.updatePage}
                    backgroundimage={peopleCadding}
                    button={<button className="view-positions-buttons" onClick={this.updatePage.bind(this,"positions")}>Open Positions</button>}
                    para="If you are a student at Mcmaster University wanting to learn the ins and outs of high performance motorsports, then come join a group of like-minded individuals trying to push the boundaries of electric vehicle technology"
                    imageLoaded={this.imageLoaded}/>
                    <RecruitmentInfo 
                    updatePage={this.updatePage}/>
                    </div>
                    <Footer />
                </div>
            )
        }
        else if(this.state.page === "positions"){
            return(
                <div >  
                    <Header 
                    page="recruitment"/>
                    <div className="recruitment-page-container">
                    <RecruitmentShowcase 
                    updatePage={this.updatePage}
                    backgroundimage={peopleCadding}
                    button={<button className="view-positions-buttons" onClick={this.updatePage.bind(this,"about")}>Why Join</button>}
                    para="If you are a student at Mcmaster University wanting to learn the ins and outs of high performance motorsports, then come join a group of like-minded individuals trying to push the boundaries of electric vehicle technology"
                    recruitmenttitle="JOIN US"/>
                    
                    <Positions updatePositionPage={this.updatePositionPage}/>
                    </div>
                    <Footer />
                </div>
            )
        }
        else{
            console.log(this.state.page)
            return(
                <div>
                <Header 
                    page="recruitment"/>
                    <div className="recruitment-page-container">
                    <RecruitmentShowcase 
                    updatePage={this.updatePage}
                    backgroundimage={(this.state.positionToshow.background != null ? this.state.positionToshow.background : peopleCadding)}
                    button={<button className="view-positions-buttons" onClick={this.updatePage.bind(this,"positions")}>Open Positions</button>}
                    para="If you are a student at Mcmaster University wanting to learn the ins and outs of high performance motorsports, then come join a group of like-minded individuals trying to push the boundaries of electric vehicle technology"
                    recruitmenttitle="JOIN US"
                    />
                    <Position position={this.state.positionToshow} className="position-full-container"/>
                    </div>
                <Footer />
                    </div>
            )
        }
    }
}

export default Recruitment
