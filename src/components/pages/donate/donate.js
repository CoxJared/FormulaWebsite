import React, { Component } from 'react'
import Header from '../../layout/header/Header';
import Footer from './../../layout/footer/Footer';
import './donate.css';

export class donate extends Component {
    render() {
        return (
            <div>
                <Header page="donate"/>
                <div className="why-donate-container-page">

                    <div className="why-donate-showcase">
                        <h1 className="why-donate-header">Support us</h1>
                    </div>
                <div className="why-donate-paragraph-container">
                    <p className="why-donate-paragraph">With the ambitious goals the team has set, the use of advanced materials, manufacturing techniques, and components are vital to success. Due to the nature of the relatively new electric vehicle industry, many of the technologies being implemented into the car are also new. In general, this means low volume at a high cost. By donating to the team, you will be providing us with the resources necessary to turn our designs into reality.
By donating you will not only be helping build a car; you will be investing in the next generation of engineers, entrepreneurs, and leaders.</p>
                </div>
                <div className="donate-paypal-container">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="Z3DJQPG5RY7RQ" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
                </form>
                </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default donate
