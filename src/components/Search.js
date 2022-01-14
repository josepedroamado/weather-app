import React, { useState, useContext } from "react"
import { Form, FormGroup, Label, Input, Button, Card, CardBody, Row, Col } from 'reactstrap'
import WeatherWidget from "./WeatherWidget"
import { HistoryContext, HistoryContextProvider } from "../contexts/HistoryContext"
import { v4 as uuidv4 } from 'uuid';

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
              <Card color="light mt-2 mx-2" className="shadow" style={{ maxWidth: '600px', maxHeight: '100px'}}>
                <CardBody>
                  <Form inline onSubmit={submit}>
                    <Row>
                        <Col xs="9">
                          <FormGroup floating>
                              <Input id="search" name="search" placeholder="Type the name of a city to search" type="text"/>
                              <Label for="search">Enter the cities to search</Label>
                          </FormGroup>
                        </Col>
                        <Col xs="2"> 
                          <Button className="mt-2 px-2">Search</Button>
                        </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>   
              <div className="container-fluid pb-4" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                {currentSearch.map((search) => <WeatherWidget city={search} key={uuidv4()}/>)} 
              </div>
            </HistoryContextProvider>
          </>
}

export default Search