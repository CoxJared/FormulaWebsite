import React, { Component } from 'react';
// import {  FormGroup, Input, Button} from 'reactstrap';
import './email.css';

class email extends Component{

    constructor() {
        super()

        this.state = {
            name: '',
            phoneNumber:'',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    // async handleSubmit(e) {
    //     e.preventDefault()

    //     const {name, phoneNumber, email, message} = this.state
    //     document.getElementById("myForm").reset();
    //     await axios.post('/api/form',
    //     {
    //         name,
    //         phoneNumber,
    //         email,
    //         message
    //     })
    //     .then(
    //         response => {
                
    //         })
    //     .catch(error => {
    //         console.log(error.message)
    //     })
    // }

    render(){
        return (
            <div className="form-full">
                <div className="form-container">
                <form id="myForm" data-netlify="true" name="Contact Submissions" method="POST">

                    <input 
                    type="text"
                    name="name"
                    onChange={this.handleChange} 
                    className="__first_name-input"
                    placeholder = "First Name"/>

                    <input 
                    type="text"
                    name="phoneNumber"
                    onChange={this.handleChange} 
                    className="__last_name-input"
                    placeholder = "Last Name"/>

                    <input 
                    type="email"
                    name="email"
                    onChange={this.handleChange} 
                    className="__email-input"
                    placeholder = "Email Address"
                    />

                    <textarea 
                    name="message"
                    onChange={this.handleChange} 
                    className="__message-input"
                    placeholder = "Message"/>

                    <button className="submit-button" type="send">Send</button>
                </form>

                </div>
            </div>
        )
                }
    
}

export default email
