import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import Search from './components/Search'
import History from './components/History'
import { UserContextProvider } from "./contexts/UserContext"

ReactDOM.render(
    <React.StrictMode>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/app" element={<App />} >
              <Route path="search" element={<Search />} />
              <Route path="history" element={<History />} />
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </React.StrictMode>
    ,
  document.getElementById('root')
);