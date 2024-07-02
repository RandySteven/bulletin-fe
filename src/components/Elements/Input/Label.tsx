import { Fragment } from "react/jsx-runtime"
import { LabelProps } from "../../../interfaces/LabelProps"

export const Label = (props : LabelProps) => {
    const {children, classname, variable} = props
    return <>
        <Fragment>
            <label id={variable} className={classname} htmlFor={variable}>{children}</label>
        </Fragment>
    </>
}