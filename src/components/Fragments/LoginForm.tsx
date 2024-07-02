import React, { useState } from "react";
import { Button } from "../Elements/Button/Button";

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

        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'accept': '*/*'
            },
            body: JSON.stringify(
                {
                    email: formData.email,
                    password: formData.password
                }
            )
        }

        fetch('http://localhost:8080/auth/login', request)
            .then(response => 
                console.log(response.json())
            )
            .catch(error => {
                console.error('There was an error!', error);
            })
    }


    return (
        <div className="flex h-screen justify-center items-center px-2 py-2 my-2">
            <form className=" grid grid-cols-1 w-1/4" onSubmit={onSubmit}>
                <label className="text-2xl font-bold text-center mb-5 text-blue-500">Login</label>
                {/* <InputLabel inputProps={{
                    inputType: "email",
                    variable: "email",
                    name: "email",
                    classname: inputClassName,
                    onChange: handleInputChange,
                    value: formData.email
                }} labelProps={{
                    classname: labelClassName,
                    variable: "email"
                }}>Email</InputLabel>

                <InputLabel inputProps={{
                    inputType: "password",
                    variable: "password",
                    name: "password",
                    classname: inputClassName,
                    onChange: handleInputChange,
                    value: formData.password
                }} labelProps={{
                    classname: labelClassName,
                    variable: "password"
                }}>Password</InputLabel> */}

                <label htmlFor="email" className={labelClassName}>Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className={inputClassName}/>

                <label htmlFor="password" className={labelClassName}>Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} className={inputClassName} />

                <Button classname="text-white font-bold bg-blue-600 mt-5 rounded-xl mx-1 hover:bg-blue-700 py-2" typeButton="submit">Login</Button>
            </form>
        </div>       
        // <form onSubmit={onSubmit}>
        //     <label htmlFor="email">Email:</label>
        //     <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}/>

        //     <label htmlFor="password">Message:</label>
        //     <input id="password" name="password" value={formData.password} onChange={handleInputChange}/>

        //     <button type="submit">Submit</button>   
        // </form>
    );
};
