import React, { Component } from 'react';
import './Map.css';

export class Map extends Component {
    render() {
        return (
            <div className="map-container">
                <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=McMaster%20University%20Hamilton%2C%20John%20Hodgins%20Engineering&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/best-vpn/">mac</a></div></div>
                <div className="address-text-box">
                    <h1 className="address-header">
                        Address
                    </h1>
                    <h1 className="address">
                        1280 Main Street West, 
                    </h1>
                    <h1 className="address">
                        Hamilton, Ontario
                    </h1>
                    <h1 className="address">
                        L8S 4L8
                    </h1>
                </div>
            </div>
        )
    }
}

export default Map
