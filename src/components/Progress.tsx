import React, { useState } from 'react'
import { Button } from './ui/button'

const Progress = () => {
    const steps = [
        { id: '1', msg: 'Personal Details' },
        { id: '2', msg: 'Contact Details' },
        { id: '3', msg: 'Incarceration Details' },
        { id: '4', msg: 'Current Status' },
        { id: '5', msg: 'Preference and Wants' },
        { id: '6', msg: 'Your Service Providers' },
    ]
    const [Progress, setProgress] = useState(0)
    const [Bullet, setBullet] = useState(0);
    const IncreaseProgress = () => {
        setBullet((prev) => prev + 1)
        if (Progress === 460) return;
        setProgress((prev) => prev + 92)
    }
    return (
        <>
            <div className='flex flex-wrap flex-cols gap-1'>
                <div style={{ height: `${Progress}px` }} className={`bg-black w-2 ml-10 rounded-lg`}>
                </div>
                <div >
                    {steps.map((step) => (
                        <div className='flex flex-wrap flex-cols gap-2' style={{ marginBottom: '70px' }}>
                            <div id={step.id} className={`border-2 border-solid border-black rounded-full w-3 h-3 ${Bullet >= Number(step.id) ? 'bg-black' : 'bg-white'}`} ></div>
                            <text className='text-sm'>{step.msg}</text>
                        </div>
                    ))}



                </div>
                <Button className='absolute left-44' onClick={IncreaseProgress}>Next</Button>
            </div>
        </>
    )
}

export default Progress