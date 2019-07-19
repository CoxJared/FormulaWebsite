import React, { Component } from 'react';

export class LowVoltage extends Component {
    render() {
        return (
            <div className="design-summary">
                <h1 className="general-header">
                    Low Voltage
                </h1>
                <p className="general-paragraph">
                    Consisting of a four layer custom PCB housing two programmable microcontrollers, circuitry for cooling control, rule mandated safety circuits sensor data processing, hv discharge circuit, tractive system active light, and power and communication data for the raspberry pi.
                </p>
            </div>
        )
    }
}

export default LowVoltage
