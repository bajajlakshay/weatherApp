import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Search from './components/Search/Search'
import {Provider} from 'react-redux'
import { store } from './redux/Store'
import WeatherInfo from './components/weatherInfo/weatherInfo.js'

const App = () => {
  
  return (
    <Provider store={store}>
    <LinearGradient colors={['#4C566A','#2E3440']} style={styles.container}>
     <Search />
     <WeatherInfo />
    </LinearGradient>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1, 

  }
})