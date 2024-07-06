import { useState } from "react"
import { Button } from "../Elements/Button/Button"
import FirstNameInput from "../Elements/Input/FirstNameInput"
import LastNameInput from "../Elements/Input/LastNameInput"
import EmailInput from "../Elements/Input/EmailInput"
import PasswordInput from "../Elements/Input/PasswordInput"
import ConfirmPasswordInput from "../Elements/Input/ConfirmPasswordInput"


export const RegisterForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const passwordValidation = () => {
        if (formData.confirmPassword != formData.password) {
            return false
        }
        return true
    }

    const onSubmit = (e : React.FormEvent) => {
        e.preventDefault()
        let isPasswordSame = passwordValidation
        if(!isPasswordSame) {
            console.log('iyaahhaah gak sama')
        } 
    }

    let inputClassName = "w-full border border-black pb-2 px-2 pt-1 rounded-full"
    let labelClassName = "w-full px-2 text-blue-600"

    return <>
        <div className="flex h-screen justify-center items-center px-2 py-2 my-2">
            <form className=" grid grid-cols-1 w-1/4" onSubmit={onSubmit}>
                <label className="text-2xl font-bold text-center mb-5 text-blue-500">Register</label>
                <FirstNameInput inputClassName={inputClassName} labelClassName={labelClassName} handleInputChange={handleInputChange} formData={formData}/>
                <LastNameInput inputClassName={inputClassName} labelClassName={labelClassName} handleInputChange={handleInputChange} formData={formData}/>
                <EmailInput labelClassName={labelClassName} inputClassName={inputClassName} formData={formData} handleInputChange={handleInputChange} />
                <PasswordInput labelClassName={labelClassName} inputClassName={inputClassName} formData={formData} handleInputChange={handleInputChange} />
                <ConfirmPasswordInput labelClassName={labelClassName} inputClassName={inputClassName} formData={formData} handleInputChange={handleInputChange} />
                <Button classname="text-white font-bold bg-blue-600 mt-5 rounded-xl mx-1 hover:bg-blue-700 py-2" typeButton="submit">Register</Button>
            </form>
        </div>
    </>   
}