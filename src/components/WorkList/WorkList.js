import React from 'react'
import WorkItem from '../WorkItem/WorkItem'
import './WorkList.css'


const WorkList = ({worklog}) => (
    <ul>
      {worklog.map(({from, to}, index) => (
        <WorkItem 
          key={index}
          index={index}
          from={from}
          to={to}
        />
      ))}
    </ul>
  )


export default WorkList