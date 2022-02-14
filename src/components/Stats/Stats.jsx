import './Stats.css';
export default function Stats({ player, user }) {
    
    function addGamertag() {
        console.log(user.gamertag)
    }

    return (
        <>
        <tbody>
            <td>{player.global.name}</td>
            <td>{player.global.level}</td>
            <td>{player.global.rank.rankName}</td>
            <td>{player.total.kills.value}</td>
            <td>
                <button onClick={addGamertag}>✓</button>
            </td>
        </tbody>
        </>
    )
}
    

