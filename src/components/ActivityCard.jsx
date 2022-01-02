import React, { useEffect, useReducer } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { Card } from './Card';
import { reducerActivityIcon } from '../context/reducer';
import { useActivityContext } from '../context/ActivityProvider';
import { GLOBAL_VAR } from '../context/global_variable';

import ImgWork from '../assets/images/icon/icon-work.svg'

const initState = {
  img : ImgWork
}

const showPeriodsTime = (timeframes) => {
  switch (timeframes) {
    case GLOBAL_VAR.DAILY:
      return 'Yesterday'
    case GLOBAL_VAR.WEEKLY:
      return 'Last Week'
    default:
      return 'Last Month'
  }
}

export const ActivityCard = ({activity}) => {
  const [activityImg, dispatch] = useReducer(reducerActivityIcon, initState)
  const {state} = useActivityContext()

  useEffect(() => {
    dispatch({title: activity.title})
  }, [activity.title])

  return (
    <Card title={activity.title}>
      
      {/* Icon and Color Activity Section */}
      <div className='overflow-hidden px-4' style={{width: '100%', height: 45}}>
        <img alt={activity.title} src={activityImg.img} className='translate-y-[-0.3rem] float-right scale-90' />
      </div>

      {/* Card Activity Section */}
      <div className='p-6 rounded-t-2xl bg-[#1c1f4a] cursor-pointer hover:bg-[#34397B]'>

        <div className="flex justify-between text-[18px]">
          <span className="font-medium">
            {activity.title}
          </span>
          <FiMoreHorizontal className='text-[24px] text-[#6f76c8] hover:text-white' />
        </div>

        <div>
          <span className='block font-light text-5xl mt-5 mb-2 '>
            {activity.timeframes[state.selected.toLowerCase()].current}hrs
          </span>
          <span className='text-[12.5px] text-[#bdc1ff]'>
            {showPeriodsTime(state.selected)} - {activity.timeframes[state.selected.toLowerCase()].previous}hrs
          </span>
        </div>
        
      </div>

    </Card>
  )
}
