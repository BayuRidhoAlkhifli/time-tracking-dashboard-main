import React from 'react'
import ImgAvatar from '../assets/images/image-jeremy.png'
import { Filter } from './Filter'

const timeFrames = [
  'Daily',
  'Weekly',
  'Monthly'
]

const showTimeFrames = (data) => {
  const component = []

  timeFrames.forEach(element => {
    component.push(<Filter key={element} timeframes={element} />)
  });

  return component

}

export const ProfileCard = ({data}) => {
  return (
    <div role="profileCard" className='row-span-2 rounded-2xl bg-[#1c1f4a] overflow-hidden'>

      {/* Avatar Section */}
      <div className='p-6 bg-[#6f76c8] rounded-b-2xl flex items-center h-auto sm:block sm:items-start md:h-[65%]'>
        <img
          src={ImgAvatar}
          alt={``}
          className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
        />
        <div className='mt-0 ml-5 md:mt-8 md:ml-0'>
          <label className='text-[12.5px] text-[#bdc1ff]'>
            Report for
          </label>
          <h1 className='block font-light text-2xl md:text-4xl'>
            Jeremy Robson
          </h1>
        </div>
      </div>

      {/* Timeframes Section */}
      <div className='grid grid-cols-3 text-center px-0 pb-0 pt-0 md:px-6 md:pb-auto md:pt-4 md:grid-cols-1 md:text-left'>
        { showTimeFrames(data) }
      </div>
    </div>
  )
}
