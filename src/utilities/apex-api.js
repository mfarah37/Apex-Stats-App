import sendApexRequest from "./apex-request";


const BASE_URL = 'https://api.mozambiquehe.re/bridge?version=5&platform=PC&auth=DRAF1M4tQCklR1jJJXoR&player='

export function get(playerData) {
    console.log(playerData)
    return sendApexRequest(
        BASE_URL + playerData, 
        'GET', 
        playerData
        )
}


