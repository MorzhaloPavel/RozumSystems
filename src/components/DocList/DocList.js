import React from 'react'
import DocItem from '../DocItem/DocItem'
import './DocList.css'


const DocList = ({employees}) => {
  return (
    <ul>
      {employees.map(( {id, firstName, lastName, middleName, birthDate}, index) => (
        <DocItem 
          key={index}
          index={index}
          id={id}
          firstName={firstName}
          lastName={lastName}
          middleName={middleName}
          birthDate={birthDate}
        />
      ))}
      
    </ul>
  )
}

export default DocList