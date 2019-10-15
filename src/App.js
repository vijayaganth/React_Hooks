import React, { useState, useReducer } from 'react';
import Routes from './routes';
import Context from "./utils/context";

import * as Reducer from './store/reducers/hooksReducer';
import * as ACTIONS from './store/actions/actions';

const App = () => {

  const [stateGlobal, setStateGlobal] = useState(0);

  const [stateGlobalContext, dispatchGlobalContext] = useReducer(Reducer.HooksReducer, Reducer.initialState)

  const incrementGlobalState = () => {
    setStateGlobal(stateGlobal + 1)
  }

  const decrementGlobalState = () => {
    setStateGlobal(stateGlobal - 1)
  }

  const handleGlobalDispatchTrue = () => {
    dispatchGlobalContext(ACTIONS.success())
}

const handleGlobalDispatchFalse = () => {
  dispatchGlobalContext(ACTIONS.failure())
}
  
    return(
      <div>
      React

      <Context.Provider
        value={{
          valueGlobalState: stateGlobal,
          addGlobalValue: ()=> incrementGlobalState(),
          decGlobalValue: ()=> decrementGlobalState(),

          reducerGlobalState: stateGlobalContext.stateprop2,
          reducerGlobalState1: stateGlobalContext.stateprop1,
          dispatchContextTrue: ()=> handleGlobalDispatchTrue(),
          dispatchContextFalse: ()=> handleGlobalDispatchFalse()
        }}
      >
      <Routes />
      </Context.Provider>
      </div>
    )
}


export default App;
