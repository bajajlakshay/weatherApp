import {createSlice } from "@reduxjs/toolkit"

const initialState = {
    location : 'Chandigarh'
}

export const locationReducer = createSlice({
        name: "locationReducer",
        initialState: initialState,
        reducers:{
            updateLocation: (state,action)=>{
                state.location = action.payload
            }
        }
})

export const {updateLocation} = locationReducer.actions

export default locationReducer.reducer