import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import './Media.scss';

export class Media extends Component {
    render() {
        return (
            <div className="media-container">  
                <h1 className="media-header">Media</h1>           
                <InstagramEmbed
                className="insta-container"
                url='https://www.instagram.com/p/ByTAySfgKwA/'
                maxWidth={320}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
                />
            </div>
        )
    }
}

export default Media
