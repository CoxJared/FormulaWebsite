import React from 'react';
import './Info.css';

function Info () {
        return (
            <div className="contact-info-container">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="info-item-container">
               <h1 className="info-item-title">Email:</h1>
               <h2 className="info-item-stuff">formula@mcmaster.ca</h2>
               </div>
               <div className="info-item-container">
               <h1 className="info-item-title">Telephone:</h1>
               <h2 className="info-item-stuff">(888) 777-4344</h2>
               </div>
               <div className="info-item-container">
               <h1 className="info-item-title">Address:</h1>
               <h2 className="info-item-stuff">1280 Main Street West, </h2>
               <h2 className="info-item-stuff">Hamilton, Ontario</h2>
               <h2 className="info-item-stuff">L8S 4L8</h2>
               </div>
               <div className="info-item-container">
               <h1 className="info-item-title">Social Media</h1>
               <a href="https://www.facebook.com/MACFormulaElectric/" class="fa fa-facebook box-link box-face" target="_blank" rel="noopener noreferrer"></a>

               <a href="https://www.instagram.com/macformulaelectric/?hl=en" class="fa fa-instagram box-link box-insta" target="_blank" rel="noopener noreferrer"></a>

                <a href="https://twitter.com/macformula" class="fa fa-twitter box-link box-twit" target="_blank" rel="noopener noreferrer"></a>

                <a href="https://www.youtube.com/channel/UC-IzKhdEu-NmXFsn1G_zvZw" class="fa fa-youtube box-link box-you" target="_blank" rel="noopener noreferrer"></a>

                <a href="https://www.linkedin.com/company/mac-formula-electric?originalSubdomain=ca" class="fa fa-linkedin box-link box-links" target="_blank" rel="noopener noreferrer"></a>

               </div>
            </div>
        )
}

export default Info
