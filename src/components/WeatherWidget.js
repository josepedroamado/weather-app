import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { getWeather } from '../services/WeatherService.js'
import { getImage } from '../services/ImageService'

function WeatherWidget(props) {
  const [weatherData, setWeatherData] = useState()
  const [image, setImage] = useState()

  useEffect(() => { 
    getWeather(props.city).then(( data ) => setWeatherData(data))
  }, [props])
  useEffect(() => { 
    getImage(props.city).then(( data ) => setImage(data))
  }, [props])

  return  weatherData && image ? <>
            <Card className="shadow m-4" style={{ width: '300px', height: '300px'}}>
              <CardImg alt="City image" src={image} style={{ width: '100%', height: '25vh'}}/>
              <CardBody>
                  <CardTitle tag="h5">{weatherData.name}, {weatherData.sys.country}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">{weatherData.weather[0].description} / {Math.round(weatherData.main.temp)} °C</CardSubtitle>
              </CardBody>
            </Card>
          </>
          : 
          <>
            <Card className="shadow m-4">
              <CardBody>
                  <CardTitle tag="h5">{props.city}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">Could not be found</CardSubtitle>
              </CardBody>
            </Card>
          </>
}

export default WeatherWidget