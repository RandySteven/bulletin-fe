import { Fragment } from "react/jsx-runtime"
import { InputLabelProps } from "../../../interfaces/InputLabelProps"
import { Label } from "./Label"
import { Input } from "./Input"
export const InputLabel : React.FC<InputLabelProps> = (props: InputLabelProps) => {
    const {
        children,
        inputProps,
        labelProps,
    } = props
    return <>
        <Fragment>
            <div className="my-2">
                <Label variable={labelProps.variable} classname={labelProps.classname}>{children}</Label>
                <Input 
                    name={inputProps.name} 
                    variable={inputProps.variable} 
                    onChange={inputProps.onChange} 
                    inputType={inputProps.inputType} 
                    classname={inputProps.classname} 
                    value={inputProps.value}/>
            </div>
        </Fragment>
    </>
}