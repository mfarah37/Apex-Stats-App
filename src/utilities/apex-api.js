import sendRequest from "./send-request";


export function add(playerData) {
    return sendRequest()
}




let arr = []
fetch("https://api.mozambiquehe.re/bridge?version=5&platform=PC&player=MambaMackinTV&auth=DRAF1M4tQCklR1jJJXoR")
    .then(response => response.json())
    .then((response) => {
        const data = response
        console.log(response)
        console.log(data.global.name)
        arr.push(data.global.name)
    })
console.log(arr)
