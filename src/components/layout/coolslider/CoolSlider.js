import React, { Component } from 'react';
import fullting from './../../../img/slider-full.png';
import naaaa from './../../../img/blue.png';
import './CoolSlider.css';

export class CoolSlider extends Component {

    componentWillMount(){
        document.addEventListener('click', function(){
        try{let wrapper = document.getElementById('wrapper');
            let topLayer = wrapper.querySelector('.top');
            let handle = wrapper.querySelector('.handle');
            let skew = 0;
            let delta = 0;
            
            if(wrapper.className.indexOf('skewed') !== -1) {
                skew = 1000;
            }
        
            wrapper.addEventListener('mousemove', function(e){
            delta = (e.clientX - window.innerWidth / 2) * 0.5;
        
            handle.style.left = e.clientX + delta + 'px';

            topLayer.style.width = e.clientX + skew + delta + 'px';})}
        catch{}
        });
        
    }

    render() {  
        
        return (
            <div>
                <section className="skewed" id="wrapper">

                    <div className="layer bottom">
                        <div className="content-wrap">
                            <div className="content-body">
                                <h1>Manufacture</h1>
                                <p>Assembling composites, pcbs, a lithium battery powered accumulator and CAN communication Network</p>
                            </div>
                            <img className="" src={fullting} alt=""/>
                        </div>
                    </div>

                    <div className="layer top">
                        <div className="content-wrap">
                            <div className="content-body">
                                <h1>Design</h1>
                                <p>Create new components, software and strategies to push our car to the forefront of racing technology</p>
                            </div>
                            <img className="" src={naaaa} alt=""/>
                        </div>
                    </div>

                    <div className="handle"></div>

                </section>
            </div>
        )
    }
}

export default CoolSlider
