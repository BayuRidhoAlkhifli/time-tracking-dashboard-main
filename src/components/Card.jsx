import React, { useEffect, useReducer } from 'react'
import { reducerActivityColor } from '../context/reducer'

const initState = { color : '#ff8c66' }

export const Card = ({ children, title }) => {
  const [activityColor, dispatch] = useReducer(reducerActivityColor, initState)

  useEffect(() => {
    dispatch({title})
  }, [title])


  return (
    <div role="cardActivity" className={`relative flex flex-col min-w-0 break-words overflow-hidden ${activityColor.color} bg-clip-border rounded-2xl`}>
      { children }
    </div>
  )
}
