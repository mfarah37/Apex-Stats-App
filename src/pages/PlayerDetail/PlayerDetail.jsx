import { checkToken } from "../../utilities/users-service"
import sendRequest from "../../utilities/send-request"



export default function PlayerDetail() {
    const handleCheckToken = async () => {
        const expDate = await checkToken()
        console.log(expDate)
    }
    const getApi = fetch("https://api.mozambiquehe.re/bridge?version=5&platform=PC&player=HeyImLifeline&auth=DRAF1M4tQCklR1jJJXoR")
    .then((response) => response.json())
    .then((json) => console.log(json))

    return (
        <>
            <h1>Player Profile</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    )
}