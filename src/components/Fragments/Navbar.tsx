import { Fragment } from "react/jsx-runtime"

export const Navbar = () => {
    return <>
        <Fragment>
            <div className="w-full bg-blue-500 py-5 grid grid-cols-2">
                <div className="flex px-2">
                    <div className="mx-2 text-white font-bold">Home</div>
                    <div className="mx-2 text-white font-bold">Home1</div>
                    <div className="mx-2 text-white font-bold">Home2</div>
                </div>

            </div>
        </Fragment>
    </>
}