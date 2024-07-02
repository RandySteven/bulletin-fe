import { AuthProps } from "../../interfaces/AuthProps";
import { LoginForm } from "../Fragments/LoginForm";
import { RegisterForm } from "../Fragments/RegisterForm";

export const AuthForm = (props: AuthProps) => {
    const {type} = props

    if (type === "login") {
        return <LoginForm />
    }
    return <>
        <RegisterForm />
    </>
}