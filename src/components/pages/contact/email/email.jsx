import React, { Component } from 'react';
import './email.css';

export function email (props) {

        return (
            <div className="form-full">
                <div className="form-container">
                    <h1 className="name-header">Name<span className="dot"></span></h1>
                    <input
                    type="text"
                    value={props.value}
                    className="__name-input"
                    placeholder = "Name"
                    onChange={props.handleNameChange}
                    />
                    <h1 className="email-header">Email<span className="dot"></span></h1>
                    <input
                    type="text"
                    value={props.value}
                    className="__email-input"
                    placeholder = "Email Address"
                    onChange={props.handleEmailChange}
                    />
                    <h1 className="message-header">Message<span className="dot"></span></h1>
                    <input
                    type="text"
                    value={props.value}
                    className="__message-input"
                    placeholder = "Message"
                    onChange={props.handleMessageChange}
                    />
                </div>
            </div>
        )
    
}

export default email
