import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { style } from './style'
import axios from 'axios';
import { API_KEY } from '../../API/Key';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faThermometer} from '@fortawesome/free-solid-svg-icons/faThermometer';
import { faCity } from '@fortawesome/free-solid-svg-icons/faCity';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons/faEarthAsia';
const WeatherInfo = () => {
location = useSelector(state => state.location)
const call = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`
const [weather,setWeather] = useState([])
const [loc,setLoc] = useState([])

const getWeatherApi = async () => {
  await axios.get(call).then(response=>{
    console.log(response.data);
    const data = response.data
    setWeather(data.current)
    setLoc(data.location)
  })
  .catch(err=>{
    console.log(`error in calling the api ${err}`);
  })
}



// ------- without axios -----------
// const getWeatherApi = async () =>{
//   try {
//     let response = await fetch(encodeURI(call))
//     let json = await response.json();
//     console.log(json);
//     setWeather(json)
//      setLoc(json.location)
//      setCurrentWeather(json.current)
//   } catch (error) {
//       console.log(`error in calling the api: ${error}`);
//   }
// }
// ------- without axios -----------

  useEffect( function(){
    getWeatherApi()
  },[call])
  return (
   <View style={style.container}>
    <View style={style.Celcius}>
    <FontAwesomeIcon icon={faThermometer} color='white' size={40}/>
      <Text style={style.CelciusText}>temprature in celcius: {weather['temp_c']}</Text>
    </View>
      <View style={style.Farhenite} >
      <FontAwesomeIcon icon={faThermometer}  color='white' size={40}/>
        <Text style={style.FarheniteText}>temprature in Farhenite: {weather['temp_f']}</Text>
       </View>
        <View style={style.City}>
        <FontAwesomeIcon icon={faCity}  color='white' size={40}/>
          <Text style={style.CityText}>City Name: {loc['name']}</Text>
        </View>
        <View style={style.Country}>
        <FontAwesomeIcon icon={faEarthAsia}  color='white' size={40}/>
          <Text style={style.CountryText}>Country Name: {loc['country']}</Text>
        </View>

    </View>
  )}



export default WeatherInfo
