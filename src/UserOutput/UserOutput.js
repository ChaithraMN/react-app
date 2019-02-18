import React from 'react';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>This's 1st </p>
            <p>assignment for {props.name}</p>
        </div>
    );
}

export default UserOutput;