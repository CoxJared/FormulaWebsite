import React, { Component } from 'react';
import LoadingSpinner from './../loadingspinner/LoadingSpinner';
import './ImageLoader.scss';

export class ImageLoader extends Component {
    constructor(props) {
        super(props)
        this.state={
            loadingItem:<div class="image-spinner headshot"></div>
        }
    }

    imageLoaded = () =>{
        this.setState({loadingItem:<></>})
    }


    render() {

        return (
           <div className="fitted">
                {this.state.loadingItem}
                <img src={this.props.img}/>
           </div> 
        )
    }
}

export default ImageLoader
