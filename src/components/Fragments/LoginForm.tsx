import React, { useState } from "react";
import { Button } from "../Elements/Button/Button";
import EmailInput from "../Elements/Input/EmailInput";
import PasswordInput from "../Elements/Input/PasswordInput";
import axios from 'axios';

export const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    let inputClassName = "w-full border border-black pb-2 px-2 pt-1 rounded-full"
    let labelClassName = "w-full px-2 text-blue-600"


    const onSubmit = (e : React.FormEvent) => {
        e.preventDefault()
        axios({
            method: 'POST',
            url: 'http://localhost:8080/auth/login',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json', 
                'accept': '*/*'
            },
            data: {
                email: formData.email,
                password: formData.password
            }
        }).then((response) => {
            console.log(response)
        }).catch((e) => {
            console.log(e)
        })
    }


    return (
        <div className="flex h-screen justify-center items-center px-2 py-2 my-2">
            <form className=" grid grid-cols-1 w-1/4" onSubmit={onSubmit}>
                <label className="text-2xl font-bold text-center mb-5 text-blue-500">Login</label>
                <EmailInput labelClassName={labelClassName} inputClassName={inputClassName} formData={formData} handleInputChange={handleInputChange} />
                <PasswordInput labelClassName={labelClassName} inputClassName={inputClassName} formData={formData} handleInputChange={handleInputChange} />
                <Button classname="text-white font-bold bg-blue-600 mt-5 rounded-xl mx-1 hover:bg-blue-700 py-2" typeButton="submit">Login</Button>
            </form>
        </div>       
    );
};
