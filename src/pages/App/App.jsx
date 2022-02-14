import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import SearchProfile from '../SearchProfile/SearchProfile'
import PlayerDetail from '../PlayerDetail/PlayerDetail';
import NavBar from '../../components/NavBar/NavBar'
import{ getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser()) 
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
        </>
        :
        <AuthPage setUser={setUser} /> 
      }
    </main>
  );
}

