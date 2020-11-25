import './Clock.css';
import React, { useState, useEffect }from 'react';
import moment from 'moment'
export const Clock = () => {

    const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss A"));

    useEffect(() =>{
        setTimeout(() => {
            setCurrentTime(moment().format("HH:mm:ss A"))
        }, 1000);
    },[currentTime]);

    return (
        <div className='world-clock-container'>
        <h1 className="lacation-name">current time</h1>
            <div className="container">
                <div className="clock-container">
                    
                    <div className="clock">{currentTime}</div>
                </div>
            </div>
        </div>
    )
}
