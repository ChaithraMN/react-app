import React from 'react';

const UserInput = (props) => {
    return (
        <input className="Input" type="text" onChange={props.usrfnc} value={props.name}/>
    );
}

export default UserInput;