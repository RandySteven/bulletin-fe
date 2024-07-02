import { Fragment } from "react/jsx-runtime";
import { InputProps } from "../../../interfaces/InputProps";

export const Input = (props : InputProps) => {
    const {
        classname,
        variable, 
        inputType,
    } = props
    return <>
        <Fragment>
            <input className={classname} type={inputType} id={variable} name={variable}/>
        </Fragment>
    </>
}