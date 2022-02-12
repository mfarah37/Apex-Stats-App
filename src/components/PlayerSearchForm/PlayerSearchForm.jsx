import { useState } from "react";

export default function PlayerSearchForm({handleGetPlayer}) {
    const [content, setContent] = useState('')
    
    function handleSubmit(evt) {
        evt.preventDefault()
        handleGetPlayer(content)
    }
    return (
        <>
        <br />
        <form onSubmit={handleSubmit}>
            <label>Gamertag</label>
            <input value={content}
            onChange={evt => setContent(evt.target.value)}
            />
            <button type="submit">Search</button>
        </form>
        </>
    )
}