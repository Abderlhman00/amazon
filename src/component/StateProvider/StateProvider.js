import React, { createContext, useContext, useReducer } from 'react';

// Prepares the dataLayer
export const StateContext = createContext();
// Wrap our app and provide datd layer
export const StateProvider = ({ Reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(Reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
