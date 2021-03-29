import React from 'react'
import './WorkItem.css'

const WorkItem = ({from, to, index}) => {


  return (
    <li className='WorkItem'>
      <div>{index + 1 }</div>
      <div>{from}</div>
      <div>{to}</div>
    </li>
  )
}

export default WorkItem