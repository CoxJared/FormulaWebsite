import React, { Component } from 'react'
import './Position.css';

export class Position extends Component {
    render() {
        return (
            <div className="position-posting-container">
                <h1 className="position-posting-name">{this.props.position.name}</h1>
                {/* <a className="position-posting-applynow" href={this.props.position.applyLink}>Apply Now</a> */}
                <div className="position-posting-applynow-container">
                <a className="position-posting-applynowi-disabled" href="#">Applications Open September 3rd</a>
                </div>
                <h2 className="position-posting-date">Closing: <span style={{color:'#c22'}}>{this.props.position.openings}</span> </h2>

                <h1 className="position-posting-heading">Description</h1>
                {this.props.position.description.map(para => (
                    <>
                    <p className="position-posting-description"><span className="position-posting-description-bold">{para.head}</span>{para.body}</p>
                    </>
                ))}
                
                {this.props.position.lists.map(list => (
                    <>
                    <h1 className="position-posting-heading">{list.name}</h1>
                    <ul className="position-posting-list">
                    {list.text.map(responsibility => (
                        <li className="position-poosting-item">{responsibility}</li>
                    ))}
                     </ul>
                     </>
                ))}
                
                



            </div>
        )
    }
}

export default Position
