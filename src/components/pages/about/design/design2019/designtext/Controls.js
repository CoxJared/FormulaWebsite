import React from 'react';

export function Controls () {
    return (
        <div className="design-summary">
            <h1 className="general-header">
                Controls
            </h1>
            <p className="general-paragraph">
            &nbsp; The MicroAutobox II is used as the vehicle control unit (VCU) which contains various control systems responsible controlling and monitoring the various ECUs it interfaces with. The vehicle control system also determines the torque distribution across all four electric motors to maximize vehicle performance, as well as controlling the cooling fans to optimize the amount of current being drawn from the 12V battery to increase the vehicle’s range. The vehicle control systems are designed and developed in MATLAB Simulink. Lastly, C-code is generated for the models and then compiled for the MicroAutbox II.
            </p>
        </div>
    )
}

export default Controls
