import React, { createContext, useContext, useReducer } from "react";
//Preparing the Data Layer

export const StateContext = createContext();
export const StateProvider = ({
    reducer, initialState, children}) => (
    <StateContext.Provider value=  {useReducer(reducer, initialState)}></StateContext.Provider>
);
//Hooks which allows us to pull information from te data layer
export const useStateValue = () => useContext(StateContext);