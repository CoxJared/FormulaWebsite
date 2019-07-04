import React, { Component } from 'react';
import './MemberSectionPicker.css';

export class MemberSectionPicker extends Component {
    render() {
        return (
            <div className='sections'>
                <ul className='member-section-list'>
                    <li className="member-section-option">
                        Leadership
                    </li>
                    <li className="member-section-option">
                        Mechanical
                    </li>
                    <li className="member-section-option">
                        Electrical
                    </li>
                </ul>
            </div>
        )
    }
}

export default MemberSectionPicker
