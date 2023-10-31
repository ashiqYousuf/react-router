import { NavLink, Outlet } from "react-router-dom"


export default function Layout() {
    return (
        <>
            <h2>React Router v-6</h2>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/post">Post</NavLink>
                </li>
                <li>
                    <NavLink to="/post/mobile">Post with Id</NavLink>
                </li>
            </ul>
            <Outlet />
        </>
    )
}
