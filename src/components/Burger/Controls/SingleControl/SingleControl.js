import React from 'react';
import controlStyling from './SingleControl.css'


const SingleControl = (props) => {
    return (
        <div className={controlStyling.SingleControl}>
            <div className={controlStyling.Label}>
                {props.label}
            </div>
            
            <button className={controlStyling.Less}>Less</button>
            <button className={controlStyling.More} onClick={props.added}>More</button>
        </div>
    );
};

export default SingleControl;