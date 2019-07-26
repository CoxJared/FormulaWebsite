import React, { Component } from 'react';
// import {  FormGroup, Input, Button} from 'reactstrap';
import './email.css';


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
class email extends Component{

    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName:'',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };

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
                <form id="myForm" name="contact" method="post">
                    <input type="hidden" name="form name" value="contact" />
                    <input 
                    type="text"
                    name="firstName"
                    onChange={this.handleChange} 
                    className="__first_name-input"
                    placeholder = "First Name"/>

                    <input 
                    type="text"
                    name="lastName"
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

                    <button className="submit-button" type="submit">Send</button>
                </form>

                </div>
            </div>
        )
                }
    
}

export default email
