import { NavLink } from "react-router"
import './Nav.css'

export const Nav = () => {
    return (
        <>
            <nav className="navbar">
                <NavLink to="/">Posts</NavLink>
                <NavLink to="/comments">Comments</NavLink>
                <NavLink to="/albums">Albums</NavLink>
                <NavLink to="/photos">Photos</NavLink>
            </nav>
        </>
    )
}
