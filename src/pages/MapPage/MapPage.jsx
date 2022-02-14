import './MapPage.css'
import { useState, useEffect } from 'react';

export default function MapPage() {
    const [maps, setMaps] = useState('')
    useEffect(() => {
        fetch('https://api.mozambiquehe.re/maprotation?version=2&auth=DRAF1M4tQCklR1jJJXoR')
        .then(response => response.json())
        .then((res) => {
        setMaps(res)
        })
    }, [])
    
    return (
        <>
        {maps ?
            <div className='maps'>
                <div className='br-map'>
                    <h1>Current BR Map</h1>
                    <h2>{maps.battle_royale.current.map}</h2>
                    <img src={maps.battle_royale.current.asset} alt="map" />
                    <h2>Remaining Time: {maps.battle_royale.current.remainingMins} minutes</h2>
                </div>
                <div className='arena-map'>
                    <h1>Current Arena Map</h1>
                    <h2>{maps.arenas.current.map}</h2>
                    <img src={maps.arenas.current.asset} alt="map" />
                    <h2>Remaining Time: {maps.arenas.current.remainingMins} minutes</h2>
                </div>
            </div>
            :
            <p></p>
            }
        </>
    )
}