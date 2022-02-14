import { useState, useEffect } from "react";

export default function HomePage() {
    const [news, setNews] = useState('')
    useEffect(() => {
        fetch('https://api.mozambiquehe.re/news?lang=en-us&auth=DRAF1M4tQCklR1jJJXoR')
        .then(response => response.json())
        .then((res) => {
        setNews(res)
        })
    }, [])
    console.log(news)
    return (
        <>
        {news ?
            <div className='news'>
              <br /> <br />
              <img src={news[0].img} />
              <h2>{news[0].title}</h2>
              <p>{news[0].short_desc}</p>
            </div>
            :
            <p></p>
            }
        </>
    )
}