import React, { Component } from 'react';
import './MemberSectionPicker.css';

export class MemberSectionPicker extends Component {
    render() {
        return (
            <div className='sections'>
                <ul className='options-list'>
                    <li className="option">
                        Leadership
                    </li>
                    <li className="option">
                        Mechanical
                    </li>
                    <li className="option">
                        Electrical
                    </li>
                </ul>
            </div>
        )
    }
}

export default MemberSectionPicker
