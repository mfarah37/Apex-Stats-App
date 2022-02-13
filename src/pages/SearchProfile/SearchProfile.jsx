import { useState } from "react";
import Stats from "../../components/Stats/Stats";
import PlayerSearchForm from "../../components/PlayerSearchForm/PlayerSearchForm";
import * as apexAPI from '../../utilities/apex-api'

export default function SearchProfile() {
    const [players, setPlayers] = useState('')

    async function handleGetPlayer(playerData) {
        const player = await apexAPI.get(playerData)
        setPlayers([...players, player])
    }
    
    return (
        <>
        <PlayerSearchForm handleGetPlayer={handleGetPlayer} />
        {players ?
        <>
        <table>
            <thead>
                <th>Steam Name</th>
                <th>Level</th>
                <th>Rank</th>
                <th>Kills</th>
                <th>Add Profile</th>
            </thead>
            {players.map((player, idx) => (
                <Stats player={player} key={idx} idx={idx} />
            ))}
        </table>
        </>
        :
        <h1>Enter Origin Gamertag</h1>
        }
        </>
    )
}