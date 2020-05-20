import React from 'react';

const ZoneInfo = (props) => {
    return (
        <div>
            <h2>Friend list Summary</h2>
            <h5>Total Friends: {props.friend}</h5>
            <h5>Blocked Users: {props.block}</h5>

        </div>
    );
};

export default ZoneInfo;