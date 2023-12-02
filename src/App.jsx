import Registration from './components/Registration.jsx'
import Login from './components/Login.jsx'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import { useEffect, useState } from 'react'

function App() {
  const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])

  return (
      <main>
        <Routes>
          <Route path='/login' element={<Login setToken={setToken} />} />
          {token?<Route path='/homepage' element={<HomePage token={token} />} />:""}
          <Route path='/' element={<Registration />} />
        </Routes>
      </main>
  )
}

export default App
