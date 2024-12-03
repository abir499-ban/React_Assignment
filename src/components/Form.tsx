import React, { useState, useContext } from 'react'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from './ui/label';
import { Button } from './ui/button';
import ProgressContext from '../context/ProgressContext'

const Form = () => {
    const {increaseProgress} = useContext(ProgressContext)
    const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const Days = [];
    for (let i = 1; i <= 31; i++) {
        Days.push(i);
    }
    const Years = []
    for (let j = 2024; j >= 2000; j--) {
        Years.push(j)
    }

    const Ethnicity = ["Hispanic or Latino", "American Indian or Alaska Native", "Asian", "White", "Black or African American", "Native Hawaiian or Other Pacific Islander"]
    const [ethicityState, setethicityState] = useState("")
    const selectEthnicity = (e: any) => {
        setethicityState(e.target.value)
    }

    const Gender = ["Male", "Female", "Non Binary", "Other"];
    const [genderState, setgenderState] = useState("")
    const selectGender = (e: any) => {
        setgenderState(e.target.value)
    }

    const IsVeteran = ["Yes", "No"];
    const [isVeteranState, setisVeteranState] = useState("")
    const selectVeteran = (e: any) => {
        setisVeteranState(e.target.value)
    }

    return (
        <>
            <form>

                <p className='text-4xl'>Personal Details</p>
                <p className='text-2xl line'>This helps us to build your profile and find services you are eligible for</p>

                <div className='py-20'>
                    <text className='font-bold text-sm'>What is your name?</text>
                    <div className='py-4 flex flex-row gap-2'>
                        <Input type="text" id="firstName" placeholder="First Name" />
                        <Input type="text" id="middleName" placeholder="Middle Name" />
                        <Input type="text" id="lastname" placeholder="Last Name" />
                    </div>
                </div>

                <div className='py-0'>
                    <text className='font-bold text-sm'>What is your date of Birth?</text>
                    <div className='py-3 flex flex-row gap-16'>
                        <div>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Month" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Months.map((month) => (
                                        <SelectItem value={month}>{month}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Date" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Days.map((day) => (
                                        <SelectItem value={day.toString()}>{day}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Year" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Years.map((year) => (
                                        <SelectItem value={year.toString()}>{year}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                </div>
                <div className='py-20'>
                    <text className='font-semibold text-sm'>Which of these best describe your ethnicity?</text>
                    <div className='py-2 flex flex-wrap flex-row gap-16'>
                        {Ethnicity.map((option) => (
                            <label className={
                                ethicityState === option
                                    ? 'text-sm border-solid border-2 border-white p-4 bg-green-900 rounded-lg text-white '
                                    : 'text-sm border-solid border-2 border-white p-4 bg-white rounded-lg text-black hover:cursor-pointer hover:bg-gray-100'
                            }>
                                {option}
                                <input type='radio' name="Ethnicity" value={option} className='hidden' onChange={selectEthnicity} />
                            </label>
                        ))}
                    </div>
                </div>

                <div className='py-0'>
                    <text className='font-semibold text-sm'>How would you best describe your gender?</text>
                    <div className='py-2 flex flex-wrap flex-row gap-2'>
                        {Gender.map((option) => (
                            <label className={
                                genderState === option
                                    ? 'text-sm border-solid border-2 border-white p-4 bg-green-900 rounded-lg text-white flex-1 text-center'
                                    : 'text-sm border-solid border-2 border-white p-4 bg-white rounded-lg text-black hover:cursor-pointer hover:bg-gray-100 flex-1 text-center'
                            }>
                                {option}
                                <input type='radio' name="Gender" value={option} className='hidden' onChange={selectGender} />
                            </label>
                        ))}
                    </div>
                </div>

                <div className='py-2'>
                    <text className='text-sm font-semibold'>Are you a veteran?</text>
                    <div className='flex flex-wrap flex-row gap-2'>
                        <label className={
                            isVeteranState === "Yes"
                                ? 'text-sm border-solid border-2 border-white p-4 bg-green-900 rounded-lg text-white  flex-1 text-center'
                                : 'text-sm border-solid border-2 border-white p-4 bg-white rounded-lg text-black hover:cursor-pointer hover:bg-gray-100 flex-1 text-center'
                        }>
                            <input type='radio' name="IsVeteran" value="Yes" className='hidden' onChange={selectVeteran} />
                            Yes
                        </label>
                        <label className={
                            isVeteranState === "No"
                                ? 'text-sm border-solid border-2 border-white p-4 bg-green-900 rounded-lg text-white  flex-1 text-center'
                                : 'text-sm border-solid border-2 border-white p-4 bg-white rounded-lg text-black hover:cursor-pointer hover:bg-gray-100  flex-1 text-center' 
                        }>
                            <input type='radio' name="IsVeteran" value="No" className='hidden' onChange={selectVeteran} />
                            No
                        </label>
                    </div>

                </div>

                    <div className='py-3'>
                <Button className='bg-purple-400 p-4 hover:bg-blue-700' onClick={increaseProgress}>Next</Button></div>

            </form>
        </>
    )
}

export default Form