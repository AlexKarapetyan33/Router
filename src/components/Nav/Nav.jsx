import { NavLink } from "react-router"

export const Nav = () => {
    return (
        <>
            <nav className="navbar">
                <NavLink to="/">Posts</NavLink>
                <NavLink to="/comments">Comments</NavLink>
            </nav>
        </>
    )
}
