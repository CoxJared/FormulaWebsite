import React, { Component } from 'react';
import './email.css';

export function email (props) {

        return (
            <div className="form-full">
                <div className="form-container">
                    <h1 className="name-header"><div className="icon-1"></div>Name</h1>
                    <input
                    type="text"
                    value={props.value}
                    className="__name-input"
                    placeholder = "Name"
                    onChange={props.handleNameChange}
                    />
                    <h1 className="email-header"><div className="icon-2"></div>Email Address</h1>
                    <input
                    type="text"
                    value={props.value}
                    className="__email-input"
                    placeholder = "Email Address"
                    onChange={props.handleEmailChange}
                    />
                    <h1 className="message-header"><div className="icon-3"></div>Message</h1>
                    <textarea
                    type="text"
                    value={props.value}
                    className="__message-input"
                    placeholder = "Message"
                    onChange={props.handleMessageChange}
                    />
                    <button className="submit-button">Send</button>
                </div>
            </div>
        )
    
}

export default email
