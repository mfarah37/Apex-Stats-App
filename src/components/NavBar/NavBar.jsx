import './NavBar.css'
import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
    
    function handleLogOut() {
        // Delegate to users-service
        userService.logOut()
        setUser(null)
    }
    return (
        <nav>
            <Link className='a' to="/">Home</Link>
            &nbsp;&nbsp;<Link className='a' to="/profiles">Player Profile</Link>
            &nbsp;&nbsp;<Link className='a' to="/profiles/search">Search Profile</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;<span className='b'>Welcome, {user.name}</span>
            &nbsp;&nbsp;<Link className='b' to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}