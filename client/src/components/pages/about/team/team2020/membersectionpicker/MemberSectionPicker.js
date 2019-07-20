import React, { Component } from '../../../../../../../node_modules/react';
import './MemberSectionPicker.css';

export class MemberSectionPicker extends Component {

    isSelected(name, selectedName)
    {
        if(name==selectedName)
        {
            return "selected-only"
        }
        return "unselected"
    }

    render() {
        return (
            <div className='sections'>
                <ul className='member-section-list'>
                    <li 
                    className={`member-section-only-option ${this.isSelected("leadership", this.props.section)}`}
                    onClick={this.props.updateSection.bind(this, "leadership")}
                    >
                        Leadership
                    </li>
                    <button className="apply-button">Apply Now</button>
                </ul>
            </div>
        )
    }
}

export default MemberSectionPicker
