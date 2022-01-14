import React, { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import WeatherAppNavbar from './WeatherAppNavbar'
import { UserContext } from '../contexts/UserContext'
import { HistoryContextProvider } from "../contexts/HistoryContext"

function App() {
  const { loggedIn } = useContext(UserContext)
  let navigate = useNavigate();
  
  useEffect(() => {
    if (!loggedIn){
      navigate("/login")
    }
  }, [loggedIn, navigate])

  return  <>
            <HistoryContextProvider>
              <WeatherAppNavbar />
              <Outlet />
            </HistoryContextProvider>
          </>
}

export default App
