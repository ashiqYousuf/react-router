/* eslint-disable react/prop-types */
// import { useNavigate } from "react-router-dom";


export default function Dashboard({ setToken, data }) {
    // let navigate = useNavigate();

    const handleClick = () => {
        window.localStorage.removeItem("token");
        setToken(null);
        // navigate("/login");
    }

    console.log(data)

    return (
        <>
            <h1>Dashboard Page</h1>
            <button onClick={(handleClick)}>Logout</button>
        </>
    )
}
