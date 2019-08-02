import React from 'react';

export function LowVoltage () {
    return (
        <div className="design-summary">
            <h1 className="general-header">
                Low Voltage
            </h1>
            <p className="general-paragraph">
            The Electrical Control System for the vehicle consists of the following components: a MicroAutoBox II, a Raspberry Pi, four AMK Motor Controllers, an Accumulator Management System (AMS), and a Body Control Module (BCM), which is designed by the team. The Raspberry Pi allows for easy implementation of a custom GUI for the vehicle dashboard. This gives the team freedom to display any information present on the CAN bus for the driver, and can be adapted to suit the drivers preferences. The four AMK Motor Controllers give independant control over each of the four in-hub motors, and allow for straight forward control over the vehicles CAN network. The AMS consists of a Elithion BMS, and a custom designed Accumulator Control Board, which acts as an interface between the high level vehicle controller and the accumulator itself, allowing for constant real time monitoring of the accumulator voltage levels, current draw, cell temperatures, and faults. Lastly, the Body Control Module is a custom designed 4 layer PCB, which houses two fully programmable microcontrollers, along with circuitry for cooling control, rule mandated safety circuits, sensor data processing, HV discharge circuit and TSAL. Localizing all circuitry on one board allows for simplified packaging and routing as well as minimizing weight through the lack of need for multiple enclosures.
            </p>
        </div>
    )
}

export default LowVoltage
