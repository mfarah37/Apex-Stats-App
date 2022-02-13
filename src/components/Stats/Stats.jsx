export default function Stats({ player }) {
    
    return (
        <>
        <tbody>
            <td>{player.global.name}</td>
            <td>{player.global.level}</td>
            <td>{player.global.rank.rankName}</td>
            <td>{player.total.kills.value}</td>
            <td>
                <button>✓</button>
            </td>
        </tbody>
        </>
    )
}
    

