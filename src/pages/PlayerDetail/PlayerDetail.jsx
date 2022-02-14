import { checkToken } from "../../utilities/users-service"
import { useState, useEffect } from "react"
import PlayerProfile from "../../components/PlayerProfile/PlayerProfile"


export default function PlayerDetail({user}) {
    const [player, setPlayer] = useState('')
    
    const handleCheckToken = async () => {
        const expDate = await checkToken()
        console.log(expDate)
    }

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
    console.log(user.gamertag)
    console.log(player)
    return (
        <>
        {player ?
            <>
            <PlayerProfile player={player} />
            </>
        :
        <h1>Search User to View Profile</h1>
        }   
        </>
    )
}