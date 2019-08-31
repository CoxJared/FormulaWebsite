import React, { Component } from 'react';
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import Email from './email/email';
import ContactTitle from './contacttitle/ContactTitle';
import './Contact.css';
import Info from './info/Info';
import imageTocheck from './../../img/hatch.jpg';
import LoadingSpinner from './../../components/loadingspinner/LoadingSpinner';


var divstyle = {
    border: 'none',
    maxWidth:'100%',
     maxHeight:'100vh'

}


export class Contact extends Component {
    constructor () {
        super()
        this.state = {
            name: '',
            email: '',
            message: '',
            loadingElement:<LoadingSpinner />
        }
        this.handleNameChange= this.handleNameChange.bind(this)
        this.handleEmailChange= this.handleEmailChange.bind(this)
        this.handleMessageChange= this.handleMessageChange.bind(this)
    }
    handleNameChange(event) {
        this.setState({name: event.target.value})
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value})
    }
    handleMessageChange(event) {
        this.setState({message: event.target.value})
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      } 

      imageLoaded= () => {
        this.setState({
        loadingElement:<div/>})
    }
      



    render() {
        var style = {
            backgroundColor:'rgb(247, 247, 247)'
          };
        return (
            <div style={style}>
                <Header page="contact"/> 
                
                {/* {this.state.loadingElement} */}
                <div className="contacts-showcase">
                <img src={imageTocheck} style={{height:'0', width:'0', opacity:'0'}} onLoad={this.imageLoaded} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <h1 className="contacts-header">Contact Us</h1>

                        <div className="info-item-container">
                            <a href="https://www.facebook.com/MACFormulaElectric/" class="fa fa-facebook box-link box-face" target="_blank" rel="noopener noreferrer"></a>

                            <a href="https://www.instagram.com/macformulaelectric/?hl=en" class="fa fa-instagram box-link box-insta" target="_blank" rel="noopener noreferrer"></a>

                            <a href="https://twitter.com/macformula" class="fa fa-twitter box-link box-twit" target="_blank" rel="noopener noreferrer"></a>

                            <a href="https://www.youtube.com/channel/UC-IzKhdEu-NmXFsn1G_zvZw" class="fa fa-youtube box-link box-you" target="_blank" rel="noopener noreferrer"></a>

                            <a href="https://www.linkedin.com/company/mac-formula-electric?originalSubdomain=ca" class="fa fa-linkedin box-link box-links" target="_blank" rel="noopener noreferrer"></a>
                        </div>


                        <div className="contacts-email-container">
                        <h1 className="contacts-emailaddress">formula@mcmaster.ca</h1>
                        </div>
                        <div className="contacts-address-container">
                        <h1 className="contacts-address">1280 Main Street West, JHE-H104</h1>
                        <h1 className="contacts-address">Hamilton, Ontario</h1>
                        <h1 className="contacts-address">L8S 4L8</h1>
                        </div>

                </div>
                {/* <ContactTitle /> */}
                    <div className="contact-container">
                    <Email 
                    nameValue={this.state.name}
                    emailValue={this.state.email}
                    messageValue={this.state.message}
                    handleNameChange={this.handleChange}
                    handleEmailChange={this.handleChange}
                    handleMessageChange={this.handleChange}
                    />
                    {/* <Map /> */}
                    {/* <Info /> */}
                </div>
                {/* <iframe width="640px" height= "480px" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HcudP17cNU8BHgDGFRZepf_xURVpVWU0xMkFSSVRPUTVDMFAwMEtYR01POCQlQCN0PWcu&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" style= {{}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe> */}
                
                

                <Footer />
            </div>
        )
    }
}

export default Contact
