import { Fragment } from "react/jsx-runtime"
import { ButtonProps } from "../../../interfaces/ButtonProps"

export const Button = (props : ButtonProps) => {
    const {
        children, classname, typeButton, onSubmit
    } = props
    return (
        <Fragment>
            <button className={classname} type={typeButton} onSubmit={onSubmit}>
                {children}
            </button>
        </Fragment>
    )
}