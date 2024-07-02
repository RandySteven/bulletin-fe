import React, { useState } from "react";
import { InputLabel } from "../Elements/Input";
import { Button } from "../Elements/Button/Button";

interface LoginFormData {
    email: string | undefined,
    password: string | undefined
}

export const LoginForm = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: ""
    })

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    let inputClassName = "w-full border border-black pb-2 px-2 pt-1 rounded-full"
    let labelClassName = "w-full px-2 text-blue-600"


    const onSubmit = (e : React.FormEvent) => {
        e.preventDefault()
        let form = new FormData(e.target as HTMLFormElement)
        let email = form.get('email')?.toString()
        let password = form.get('password')?.toString()
        setFormData({
            email: email,
            password: password
        })
        console.log(formData)

    }

    const buttonHandler = (e : React.FormEvent) => {
        e.preventDefault()
        console.log('lah lu ngapain?')
    }

    return (
        <div className="flex h-screen justify-center items-center px-2 py-2 my-2">
            <form className=" grid grid-cols-1 w-1/4" onSubmit={onSubmit}>
                <label className="text-2xl font-bold text-center mb-5 text-blue-500">Login</label>
                <InputLabel inputProps={{
                    inputType: "email",
                    variable: "email",
                    classname: inputClassName,
                    onChange: handleInputChange,
                    value: formData.email
                }} labelProps={{
                    classname: labelClassName,
                    variable: "password"
                }}>Email</InputLabel>
                <InputLabel inputProps={{
                    inputType: "password",
                    variable: "password",
                    classname: inputClassName,
                    onChange: handleInputChange,
                    value: formData.password
                }} labelProps={{
                    classname: labelClassName,
                    variable: "email"
                }}>Password</InputLabel>
                <Button classname="text-white font-bold bg-blue-600 mt-5 rounded-xl mx-1 hover:bg-blue-700 py-2" typeButton="submit" onSubmit={buttonHandler}>Login</Button>
            </form>
        </div>       
    );
};
