import React, { useContext } from "react"
import { HistoryContext } from "../contexts/HistoryContext"
import WeatherWidget from "./WeatherWidget"
import { v4 as uuidv4 } from 'uuid';

function History() {
  const { history } = useContext(HistoryContext)
  return  <>
            <div className="container-fluid pb-4" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                {history.map((search) => <WeatherWidget city={search} key={uuidv4()}/>)} 
            </div>
          </>
}

export default History