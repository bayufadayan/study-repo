import { NavLink, Link, Outlet } from "react-router-dom";
import "../styles/index.css"

function RootLayout() {
    return (
        <>
            <Link className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""} to="/"></Link>

            <NavLink to="/">Home</NavLink> | 
            <NavLink to="/blog" style={{ marginInline: "5px" }}>Blog</NavLink> | 
            <NavLink to="/about/">About</NavLink>
            <p>
                <Outlet />
            </p>
        </>
    )
}

export default RootLayout;