/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom"


export default function Login({ setToken, data }) {
    const location = useLocation();

    const handleClick = () => {
        window.localStorage.setItem("token", "djknf32y32r8023rh");
        setToken("djknf32y32r8023rh");
    }

    console.log(data);

    return (
        <>
            <h1>Please Login Here</h1>
            <h2>{location?.state?.message}</h2>
            <button onClick={handleClick}>Login</button>
        </>
    )
}
