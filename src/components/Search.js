import React, { useState, useContext } from "react"
import { Form, FormGroup, Label, Input, Button, Card, CardBody, Row, Col } from 'reactstrap'
import WeatherWidget from "./WeatherWidget"
import { HistoryContext, HistoryContextProvider } from "../contexts/HistoryContext"

function Search() {
  const [currentSearch, setCurrentSearch] = useState([])
  const { history, setHistory } = useContext(HistoryContext)
  const submit = (event) => {
    let input = event.target.search.value
    let cities = input.split(',')
    setCurrentSearch(cities)
    updateHistory(cities)
    event.preventDefault()
  }

  const updateHistory = (cities) => {
    let currentHistory = [...history]
    cities.forEach(city => {
      currentHistory.push(city)
    })
    while (currentHistory.length > 10) {
      currentHistory.shift()
    }
    setHistory(currentHistory)
  }

  return  <>
            <HistoryContextProvider>
              <div>
                <Card color="light mt-2 mx-2" className="text-center shadow">
                  <CardBody>
                    <Form inline onSubmit={submit}>
                      <Row>
                          <Col className="bg-light" xs="10">
                            <FormGroup floating className="mb-2 me-sm-2 mb-sm-0">
                                <Input id="search" name="search" placeholder="Type the name of a city to search" type="text"/>
                                <Label className="me-sm-2" for="search">Type the name of the cities to search separated by commas</Label>
                            </FormGroup>
                          </Col>
                          <Col className="bg-light" xs="2"> 
                            <Button className="mt-2">Search</Button>
                          </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>   
                <div className="container-fluid pb-4" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                  {currentSearch.map((search) => <WeatherWidget city={search} key={search}/>)} 
                </div> 
              </div>
            </HistoryContextProvider>
          </>
}

export default Search