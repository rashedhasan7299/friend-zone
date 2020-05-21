import React from 'react';

const ZoneInfo = (props) => {
    return (
        <div>
            <h2>Friend list</h2>
            <h4>Total Users: {props.users.length}</h4>
            <h5>Total Friends: {props.friend.length}</h5>
            <h5>Blocked users: {props.block.length}</h5>
            <h5>Annual Salary: {props.salary}</h5>

        </div>
    );
};

export default ZoneInfo;