import React from 'react'
import './CounterDashboard.css'
export default function CounterDashboard(){
    const [totalUrges,setTotalUrges] = React.useState(0)
    const [successCount,setSuccessCount] = React.useState(0)
    const [failureCount,setFailureCount] = React.useState(0)
    
    function changeCounter(value){
        setTotalUrges(prevCount => prevCount+1)
        if(value === '+'){
            setSuccessCount(prevCount => prevCount+1)
        }else if(value === '-'){
            setFailureCount(prevCount => prevCount+1)
        }else{
            setTotalUrges(0)
            setSuccessCount(0)
            setFailureCount(0)
        }
    }

    return (
        <div className='counter-dashboard-page'>
            <div className='card-counters'>
                <div className='counters' id="totalUrges">{totalUrges}</div>
                <div className='counters' id="successCount">{successCount}</div>
                <div className='counters' id="failureCount">{failureCount}</div>
            </div>
            <div className='button-groups'>
                <button className='button' id="incrementSuccess" onClick={() => changeCounter('+')}>Hurray!</button>
                <button className='button' id="incrementFailure"onClick={() => changeCounter('-')}>Damn!</button>
                <button className='button' id="reset" onClick={() => changeCounter(0)}>Reset</button>
            </div>
        </div>
    )
}