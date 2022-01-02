import { createContext, useContext, useReducer } from "react";
import { reducerActivity } from "./reducer";

const initState = {
  selected: 'Daily'
}

const ActivityContext = createContext();

export const useActivityContext = () => {
  return useContext(ActivityContext)
}

export const ActivityProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerActivity, initState)
  return (
    <ActivityContext.Provider
      value={{state,dispatch}}
    >
      {children}
    </ActivityContext.Provider>
  )
}
