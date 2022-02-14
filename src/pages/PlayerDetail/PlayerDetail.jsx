import { checkToken } from "../../utilities/users-service"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import PlayerProfile from "../../components/PlayerProfile/PlayerProfile"


export default function PlayerDetail({user}) {
    const [player, setPlayer] = useState('')
    
    useEffect(() => {
        if (user.gamertag != undefined) {
            fetch("https://api.mozambiquehe.re/bridge?version=5&platform=PC&auth=DRAF1M4tQCklR1jJJXoR&player=" + user.gamertag)
                .then(response => response.json())
                .then((data) => {
                    setPlayer(data)
                })
                .catch((err) => console.log(err))
        }
    }, [])
    return (
        <>
        {player ?
            <>
            <PlayerProfile player={player} />
            </>
        :
        <h1>
            <Link to="/profiles/search">Search User to View Profile</Link>
        </h1>
        }   
        </>
    )
}