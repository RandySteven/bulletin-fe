import { Fragment } from "react/jsx-runtime"
import { ButtonProps } from "../../../interfaces/ButtonProps"

export const Button = (props : ButtonProps) => {
    const {
        children, classname, typeButton
    } = props
    return (
        <Fragment>
            <button className={classname} type={typeButton}>
                {children}
            </button>
        </Fragment>
    )
}