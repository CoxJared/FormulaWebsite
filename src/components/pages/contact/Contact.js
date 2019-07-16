import React, { Component } from 'react';
import Header from './../../layout/header/Header';
import Footer from './../../layout/footer/Footer';
import Email from './email/email';
import ContactTitle from './contacttitle/ContactTitle';



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
        return (
            <div>
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
                <Footer />
            </div>
        )
    }
}

export default Contact
