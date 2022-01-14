import React, { useState, createContext } from 'react'

export const HistoryContext = createContext([])

export const HistoryContextProvider = (props) => {
  const [history, setHistory] = useState(["montevideo", "rosario", "san francisco"])
  return (
    <HistoryContext.Provider value={{history, setHistory}}>
      {props.children}
    </HistoryContext.Provider>
  )
}