import React, { Component } from 'react';
import './MainShowcase.scss';
import 'react-animated-slider/build/horizontal.css';

import Macfelogo from './../../../../img/logo-transparent.png';

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};
TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};
class MainShowcase extends Component {
    componentWillMount() {
        console.log("mounted");
        window.onload = () =>{
            console.log("started")
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                  new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid rgb(190, 18, 18)}";
            document.body.appendChild(css);
        };
    }

    render() {
        return (
            <div className="showcase-container">
                {/* <link href="https://fonts.googleapis.com/css?family=Assistant&display=swap" rel="stylesheet"/> */}
                <div className="showcase">
                    <div className="team-logo-container">
                        <img className="team-logo" src={Macfelogo} alt="Mac FE logo"/>
                    </div>
                    <div className="draw-line"></div>
                    <h1 className="team-name">MAC Formula Electric</h1>
                    <div className="draw-line"></div>
                    {/* <div className="typewriter-container">
                        <h3 className="solid-text">Discover  </h3>
                        <h3>           
                            <a href="" className="typewrite" data-period="2000" data-type='[ "Technology", "Teamwork", "Innovation"]'>
                                <span className="wrap"></span>
                            </a>
                        </h3>
                        </div> */}
                </div>
            </div>
        )
    }
}

export default MainShowcase;
