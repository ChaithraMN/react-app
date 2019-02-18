import React from 'react';
// import Radium from 'radium';

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    return(
        <div className="Person" >
        <p>Person Component {props.num}</p>
        <p onClick={props.click}>{props.name}</p>
        <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    );
}

// export default Radium(person);
export default person;