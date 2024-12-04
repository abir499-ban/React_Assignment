import React, { useState, useContext, useEffect } from 'react'
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
    type  FormDataType = {
        firstName: string;
        middleName: string;
        lastName: string;
        dateofBirth: {
            month: string;
            day: string;
            year: string;
        };
        ethnicity: string;
        gender: string;
        isVeteran: string;
    };
    const handlesubmit = (e : any)=>{
        e.preventDefault();
        console.log(FormData);
    }
    const DefaultFormData = {
        firstName: '',
        middleName: '',
        lastName: '',
        dateofBirth: {
            month: '',
            day: '',
            year: '',
        },
        ethnicity: '',
        gender: '',
        isVeteran: ''
    }
    const savedFormData = sessionStorage.getItem('FormData') ;
    const [FormData, setFormData] = useState<FormDataType>(()=>{
        return savedFormData ? JSON.parse(savedFormData) : DefaultFormData
    });
    useEffect(()=>{
        sessionStorage.setItem('FormData', JSON.stringify(FormData))
    },[FormData])

    const { increaseProgress , progress} = useContext(ProgressContext)
    const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const Days = [];
    for (let i = 1; i <= 31; i++) {
        Days.push(i.toString());
    }
    const Years = []
    for (let j = 2024; j >= 2000; j--) {
        Years.push(j.toString())
    }

    const Ethnicity = ["Hispanic or Latino", "American Indian or Alaska Native", "Asian", "White", "Black or African American", "Native Hawaiian or Other Pacific Islander"]
    const [ethicityState, setethicityState] = useState(()=>{
        return sessionStorage.getItem('ethicityState') || ''
    })
    const selectEthnicity = (e: any) => {
        setFormData((prev)=> ({
            ...prev,
            ethnicity : e.target.value
        }))
        setethicityState(e.target.value)
    }
    useEffect(()=>{
        sessionStorage.setItem('ethicityState',ethicityState )
    }, [ethicityState])

    const Gender = ["Male", "Female", "Non Binary", "Other"];
    const [genderState, setgenderState] = useState(()=>{
        return sessionStorage.getItem('genderState') || ''
    })
    const selectGender = (e: any) => {
        setFormData((prev)=> ({
            ...prev,
            gender : e.target.value
        }))
        setgenderState(e.target.value)
    }

    useEffect(()=>{
        sessionStorage.setItem('genderState',genderState )
    }, [genderState])

    const IsVeteran = ["Yes", "No"];
    const [isVeteranState, setisVeteranState] = useState(()=>{
         return sessionStorage.getItem('veteranState') || ''
    })
    const selectVeteran = (e: any) => {
        setFormData((prev)=> ({
            ...prev,
            isVeteran : e.target.value
        }))
        setisVeteranState(e.target.value)
    }
    useEffect(()=>{
        sessionStorage.setItem('veteranState', isVeteranState )
    }, [isVeteranState])

    return (
        <>
            <form>

                <p className='text-4xl'>Personal Details</p>
                <p className='text-2xl line'>This helps us to build your profile and find services you are eligible for</p>

                <div className='py-20'>
                    <p className='font-bold text-sm'>What is your name?</p>
                    <div className='py-4 flex flex-row gap-2'>
                        <Input type="text" name="firstName" placeholder="First Name" value={FormData.firstName}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    firstName: e.target.value,
                                }))
                            } />
                        <Input type="text" name="middleName" placeholder="Middle Name" value={FormData.middleName}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    middleName: e.target.value,
                                }))
                            } />
                        <Input type="text" name="lastname" placeholder="Last Name" value={FormData.lastName}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    lastName: e.target.value,
                                }))
                            } />
                    </div>
                </div>

                <div className='py-0'>
                    <p className='font-bold text-sm'>What is your date of Birth?</p>
                    <div className='py-3 flex flex-row gap-16'>
                        <div>
                            <Select value={FormData.dateofBirth.month}
                                onValueChange={(e) =>
                                    setFormData((prev) =>
                                    (
                                        {
                                            ...prev,
                                            dateofBirth: {
                                                ...prev.dateofBirth,
                                                month: e
                                            }
                                        }))}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Month" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Months.map((month) => (
                                        <SelectItem  key={month} value={month}>{month}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Select name='Day' value={FormData.dateofBirth.day} 
                            onValueChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    dateofBirth: {
                                        ...prev.dateofBirth,
                                        day: e
                                    }
                                }))
                            }>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Date" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Days.map((day) => (
                                        <SelectItem key={day} value={day.toString()}>{day}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Select name='Year'  value={FormData.dateofBirth.year}
                            onValueChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    dateofBirth: {
                                        ...prev.dateofBirth,
                                        year: e
                                    }
                                }))
                            }>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Year" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Years.map((year) => (
                                        <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                </div>
                <div className='py-20'>
                    <p className='font-semibold text-sm'>Which of these best describe your ethnicity?</p>
                    <div className='py-2 flex flex-wrap flex-row gap-16'>
                        {Ethnicity.map((option) => (
                            <label 
                            key={option}
                            className={
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
                    <p className='font-semibold text-sm'>How would you best describe your gender?</p>
                    <div className='py-2 flex flex-wrap flex-row gap-2'>
                        {Gender.map((option) => (
                            <label 
                            key={option}
                            className={
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

                <div className='py-4'>
                    <p className='text-sm font-semibold'>Are you a veteran?</p>
                    <div className='flex flex-wrap flex-row gap-2'>
                        {IsVeteran.map((option)=>(
                            <label key={option} className={isVeteranState === option
                                ? 'text-sm border-solid border-2 border-white p-4 bg-green-900 rounded-lg text-white  flex-1 text-center'
                                : 'text-sm border-solid border-2 border-white p-4 bg-white rounded-lg text-black hover:cursor-pointer hover:bg-gray-100  flex-1 text-center'
                            }>
                                {option}
                                <input type='radio' name="IsVeteran" value={option} className='hidden' onChange={selectVeteran}/>
                            </label>
                        ))}
                       
                    </div>

                </div>

                <div className='py-3'>
                    {
                        progress < 460 ? 
                        <Button className='bg-purple-400 p-4 hover:bg-blue-700' onClick={increaseProgress}>Next</Button>
                        :
                        <Button type='submit' onClick={handlesubmit}>Submit</Button>
                    }
                    </div>

            </form>
        </>
    )
}

export default Form