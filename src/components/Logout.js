import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

function Logout() {
  const setLoggedIn = useContext(UserContext)
  let navigate = useNavigate() 
  setLoggedIn(false)
  navigate("/login")
}

export default Logout
