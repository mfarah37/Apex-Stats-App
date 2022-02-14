import './PlayerSearchForm.css'

import { useState } from "react";

export default function PlayerSearchForm({handleGetPlayer}) {
    const [content, setContent] = useState('')
    
    function handleSubmit(evt) {
        evt.preventDefault()
        handleGetPlayer(content)
        setContent('')
    }
    return (
        <div className="search-form">
            <br />
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input value={content}
                    onChange={evt => setContent(evt.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}