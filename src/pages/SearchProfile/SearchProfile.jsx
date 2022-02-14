import './SearchProfile.css';
import { useState } from "react";
import Stats from "../../components/Stats/Stats";
import PlayerSearchForm from "../../components/PlayerSearchForm/PlayerSearchForm";
import * as apexAPI from '../../utilities/apex-api'

export default function SearchProfile({ user }) {
    const [players, setPlayers] = useState('')

    async function handleGetPlayer(playerData) {
        const player = await apexAPI.get(playerData)
        user.gamertag = playerData
        setPlayers([...players, player])
    }
    
    return (
        <div className="container">
            <div className="form">
                <br /> <br />
                <PlayerSearchForm handleGetPlayer={handleGetPlayer} />
                <br /> <br />
            </div>
            {players ?
            <div className="stats-table">
                <table>
                    <thead>
                        <th>Steam Name</th>
                        <th>Platform</th>
                        <th>Status</th>
                    </thead>
                    {players.map((player, idx) => (
                        <Stats player={player} key={idx} idx={idx} user={user} />
                    ))}
                </table>
            </div>
            :
            <div className="text">
                <h1>Enter Origin Gamertag</h1>
            </div>
            }
        </div>
    )
}