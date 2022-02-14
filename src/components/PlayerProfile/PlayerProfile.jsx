export default function PlayerProfile({ player }) {

    return (
        <div className="player-card">
            <h1>{player.global.name}</h1>
            <h2>Level: {player.global.level}</h2>
            <h2>BR Rank: {player.global.rank.rankName}</h2>
            <h2>Arena Rank: {player.global.arena.rankName}</h2>
            <h2>Kills: {player.total.kills.value}</h2>
        </div>
    )
}