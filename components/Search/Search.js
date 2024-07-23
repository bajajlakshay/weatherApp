import { View, Text, TextInput, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateLocation } from '../../redux/reducers/Location'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
const Search = () => {
  const [loc,setLoc] = useState('')

const dispatch = useDispatch()

  function updatingLocation(value){
    dispatch(updateLocation(value))
    console.log(`location changed`)
  }

  return (
    <View className = "bg-slate-400 m-4 rounded-md p-3 items-center justify-center content-center flex-row ">
      <TextInput value={loc} onChangeText={loc => setLoc(loc)}
      placeholder='Enter your city'
      />
      <Pressable
        className="bg-orange-500 p-5 items-center ml-auto rounded-md flex-row "
       onPress={()=>
        {console.log(`value is update: ${loc}`)
          updatingLocation(loc)}
        }>
        <FontAwesomeIcon icon={faSearch}/>
        </Pressable>
      
    </View>
  )
}

export default Search