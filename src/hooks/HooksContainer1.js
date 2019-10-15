import React, { useState, useEffect, useReducer, useContext } from 'react';
import * as Reducer from './../store/reducers/hooksReducer';
import * as ACTIONS from './../store/actions/actions';

import Context from "./../utils/context";

const HooksContainer1 = () => {

    const context = useContext(Context);

    const [stateValue, setValue] = useState(0);
    const [useEffectValue, setUseEffectValue] = useState(null)
    
    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

    const incrementValue = () => {
        setValue(stateValue + 1)
    }

    const decrementValue = () => {
        setValue(stateValue - 1)
    }

    useEffect(() => {
        setTimeout(()=> setUseEffectValue("use effect worked"), 3000)
    }, [stateValue])

    const changeUseEffectValue = () => {
        setUseEffectValue("use effect changed")
    }

    const handleDispatchTrue = () => {
        dispatch(ACTIONS.success())
    }

    const handleDispatchFalse = () => {
        dispatch(ACTIONS.failure())
    }
    console.log(context, state)
    return(
      <div>
      React Hooks
      <br />
      <br />
      <button onClick={()=>incrementValue()}>inc Local Value</button>
      <button onClick={()=>decrementValue()}>dec Local Value</button>
      <button onClick={()=>handleDispatchTrue()}>Dispatch True</button>
      <button onClick={()=>handleDispatchFalse()}>Dispatch False</button>
      <button onClick={()=>context.addGlobalValue()}>inc Global Value</button>
      <button onClick={()=>context.decGlobalValue()}>dec Global Value</button>
      <button onClick={()=>context.dispatchContextTrue()}>Global Value true</button>
      <button onClick={()=>context.dispatchContextFalse()}>Global Value false</button>
      <br />
      <p>Local State: {stateValue}</p>
      <br />
      <p>Global State: {context.valueGlobalState}</p>
      <br />
      {useEffectValue ? <p> {useEffectValue} </p> : <p> NUll Value </p>}
      <br />
      {context.reducerGlobalState ? <p>global state prop2 is True</p> : <p>global state prop2 is false</p>}
      <br />
      <button onClick={()=>changeUseEffectValue()}>changeUseEffectValue</button>
      <br />
      {
          state.stateprop1 ? <p>state prop1 is True</p> : <p>state prop1 is false</p>
      }
      </div>
    )
}


export default HooksContainer1;
