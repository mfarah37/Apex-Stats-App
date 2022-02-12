export default async function sendApexRequest(url, method = 'GET', payload = null) {
    const res = await fetch(url)
    if (res.ok) return res.json()
    throw new Error('Bad Request')
}