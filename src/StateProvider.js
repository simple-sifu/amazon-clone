// setup data layer
// We need this to track the basket.
import React, {createContext, useContext, useReducer } from "react";


// This is the Data Layer
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(useReducer, initialState)}>
        { children }
    </StateContext.Provider>
)

// This is how we use it inside a component

export const useState = () => useContext(StateContext);