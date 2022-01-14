import React, { useContext } from "react"
import { HistoryContext } from "../contexts/HistoryContext"
import WeatherWidget from "./WeatherWidget"

function History() {
  const { history } = useContext(HistoryContext)
  return  <>
            <div className="container-fluid pb-4" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                {history.map((search) => <WeatherWidget city={search} key={search}/>)} 
            </div>
          </>
}

export default History