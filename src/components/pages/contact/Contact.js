import React, { Component } from 'react';
import Header from './../../layout/header/Header';
import Footer from './../../layout/footer/Footer';
import Email from './email/email';
import ContactTitle from './contacttitle/ContactTitle';
import Map from './map/Map';
import { genericTypeAnnotation } from '@babel/types';



export class Contact extends Component {
    constructor () {
        super()
        this.state = {
            name: '',
            email: '',
            message: ''
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
    render() {
        var style = {
            backgroundColor:'rgb(247, 247, 247)'
          };
        return (
            <div style={style}>
                <Header page="contact"/> 
                <ContactTitle />
                <Email 
                nameValue={this.state.name}
                emailValue={this.state.email}
                messageValue={this.state.message}
                handleNameChange={this.handleChange}
                handleEmailChange={this.handleChange}
                handleMessageChange={this.handleChange}
                />
                <Map />
                <Footer />
            </div>
        )
    }
}

export default Contact
