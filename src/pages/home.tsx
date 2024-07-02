import { useState, useEffect } from "react"
import { Fragment } from "react/jsx-runtime"

interface Dummy {
    id: string
    title: string
    description: string
}

export const HomePage = () => {
    const [dummies, setDummies] = useState<Dummy[]>([]);
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [error, setError] = useState(null); // Track any errors

    useEffect(() => {
        setIsLoading(true); // Set loading state to true before fetching
        fetch("http://localhost:8080/dummies")
        .then((response) => response.json())
        .then((data) => {
            setDummies(data.data.dummies); // Update state with fetched data
        })
        .catch((error) => {
            setError(error); // Set error state if fetch fails
        })
        .finally(() => {
            setIsLoading(false); // Set loading state to false after fetch completes (success or error)
        });
    }, []);

    return <>
        <Fragment>
            <h1>Fetched Dummies</h1>
            <ul>
                {dummies.map((dummy) => (
                    <li key={dummy.id} className="bg-blue-500 my-2">
                        <h6>{dummy.title}</h6>
                        <p> {dummy.description} </p>
                    </li>
                ))}
            </ul>
        </Fragment>
    </>
}