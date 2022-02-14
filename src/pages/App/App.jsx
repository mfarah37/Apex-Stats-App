import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import SearchProfile from '../SearchProfile/SearchProfile'
import PlayerDetail from '../PlayerDetail/PlayerDetail';
import NavBar from '../../components/NavBar/NavBar'
import{ getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser()) 
  const [news, setNews] = useState('')
  useEffect(() => {
    fetch('https://api.mozambiquehe.re/news?lang=en-us&auth=DRAF1M4tQCklR1jJJXoR')
    .then(response => response.json())
    .then((data) => {
      setNews(data)
    })
  }, [])
  console.log(news)
  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/profiles/search" element={<SearchProfile user={user} />} />
            <Route path="/profiles" element={<PlayerDetail user={user} />} />
          </Routes>
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
        :
        <AuthPage setUser={setUser} /> 
      }
    </main>
  );
}

