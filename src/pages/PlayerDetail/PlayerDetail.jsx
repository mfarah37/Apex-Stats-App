import { checkToken } from "../../utilities/users-service"
import { useState } from "react"



export default function PlayerDetail() {
    const [player, setPlayer] = useState([])
    
    const handleCheckToken = async () => {
        const expDate = await checkToken()
        console.log(expDate)
    }

    // async function handleAddPlayer(playerData) {
    //     const player = await apexAPI.add(playerData)
    //     setPlayer([...player, player])
    // }
    
    let arr =[]
    fetch("https://api.mozambiquehe.re/bridge?version=5&platform=PC&auth=DRAF1M4tQCklR1jJJXoR&player=MambaMackinTV")
    .then(response => response.json())
    .then((response) => {
        const data = response
        console.log(response)
        console.log(data.global.name)
        arr.push(data.global.name)
    })
console.log(arr)

    return (
        <>
            <h1>Player Profile</h1>
            <h2>GT:</h2>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    )
}