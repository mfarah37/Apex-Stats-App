import { useState } from "react";
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
        <h1>{players[0].global.name}</h1>
        <h2>Rank: {players[0].global.rank.rankName}</h2>
        <h2>Lvl: {players[0].global.level}</h2>
        <h2>Kills: {players[0].total.kills.value}</h2>
        </>
        :
        <h1>Enter Origin Gamertag</h1>
        }
        </>
    )
}