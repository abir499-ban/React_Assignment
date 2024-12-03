import React, { useContext, useState } from 'react'
import ProgressContext from '../context/ProgressContext'
const Progress = () => {
    const steps = [
        { id: '1', msg: 'Personal Details' },
        { id: '2', msg: 'Contact Details' },
        { id: '3', msg: 'Incarceration Details' },
        { id: '4', msg: 'Current Status' },
        { id: '5', msg: 'Preference and Wants' },
        { id: '6', msg: 'Your Service Providers' },
    ]

    const {bullet, progress} =  useContext(ProgressContext)
    
    return (
        <>
            <div className='flex flex-wrap flex-cols gap-1'>
                <div style={{ height: `${progress}px` }} className={`bg-black w-2 ml-10 rounded-lg`}>
                </div>
                <div >
                    {steps.map((step) => (
                        <div className='flex flex-wrap flex-cols gap-2' style={{ marginBottom: '70px' }}>
                            <div id={step.id} className={`border-2 border-solid border-black rounded-full w-3 h-3 ${bullet >= Number(step.id) ? 'bg-black' : 'bg-white'}`} ></div>
                            <text className='text-sm'>{step.msg}</text>
                        </div>
                    ))}



                </div>
            </div>
        </>
    )
}

export default Progress