import React, { Component } from 'react';
import './MemberSectionPicker.css';

export class MemberSectionPicker extends Component {

    isSelected(name, selectedName)
    {
        if(name===selectedName)
        {
            return "selected"
        }
        return "unselected"
    }

    render() {
        if(this.props.season==="2019")
        {
        return (
            <div className='sections'>
                <ul className='member-section-list'>
                    <li 
                    className={`member-section-option ${this.isSelected("leadership", this.props.section)}`}
                    onClick={this.props.updateSection.bind(this, "leadership")}
                    >
                        Leadership
                    </li>
                    <li 
                    className={`member-section-option ${this.isSelected("mechanical", this.props.section)}`}
                    onClick={this.props.updateSection.bind(this, "mechanical")}
                    >
                        Mechanical
                    </li>
                    <li 
                    className={`member-section-option ${this.isSelected("electrical", this.props.section)}`}
                    onClick={this.props.updateSection.bind(this, "electrical")}
                    >
                        Electrical
                    </li>
                    <li 
                    className={`member-section-option ${this.isSelected("business", this.props.section)}`}
                    onClick={this.props.updateSection.bind(this, "business")}
                    >
                        Business
                    </li>
                </ul>
            </div>
        )
        }
        return (
            <div className='sections'>
                <ul className='member-section-list'>
                    <li 
                    className={`member-section-option ${this.isSelected("leadership", this.props.section)}`}
                    onClick={this.props.updateSection.bind(this, "leadership")}
                    >
                        Leadership
                    </li>
                    <li 
                    className={` member-section-option-collapse`}
                    onClick={this.props.updateSection.bind(this, "mechanical")}
                    >
                        Mechanical
                    </li>
                    <li 
                    className={`member-section-option-collapse`}
                    onClick={this.props.updateSection.bind(this, "electrical")}
                    >
                        Electrical
                    </li>
                    <li 
                    className={`member-section-option-collapse`}
                    onClick={this.props.updateSection.bind(this, "business")}
                    >
                        Business
                    </li>
                </ul>
            </div>
        )
        
    }
}

export default MemberSectionPicker
