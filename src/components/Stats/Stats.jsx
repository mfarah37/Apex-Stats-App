import './Stats.css';
export default function Stats({ player, user }) {
    
    return (
        <>
        <tbody>
            <td>{player.global.name}</td>
            <td>{player.global.platform}</td>
            {
            player.realtime.isOnline ?
                <td>Online</td>
            :
                <td>Offline</td>
            }
        </tbody>
        </>
    )
}
    

