import React from "react";

export declare interface InputProps {
    children?: React.ReactNode
    inputType: string
    variable: string
    classname: string
    value: string | undefined
    onChange: React.ChangeEventHandler<HTMLInputElement>
}