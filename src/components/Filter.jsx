import React from 'react'
import { useActivityContext } from '../context/ActivityProvider'

export const Filter = ({timeframes}) => {

  const { state, dispatch } = useActivityContext()

  return (
    <div
      onClick={() => dispatch({timeframes})}
      className={`py-5 cursor-pointer ${state.selected === timeframes ? 'text-white' : 'text-[#6f76c8]'} hover:text-white md:py-2`}
    >
      {timeframes}
    </div>
  )
}
