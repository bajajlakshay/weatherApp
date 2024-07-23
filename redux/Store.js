import { configureStore } from "@reduxjs/toolkit";
import Location from "./reducers/Location";

export const store = configureStore({
    reducer: Location
})