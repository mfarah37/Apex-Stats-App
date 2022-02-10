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
            <Link to="/orders">Player Profile</Link>
            &nbsp;&nbsp;<Link to="/orders/new">Search Profile</Link>
            &nbsp;&nbsp;<span>Welcome, {user.name}</span>
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}