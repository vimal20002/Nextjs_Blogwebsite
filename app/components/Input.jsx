import React from 'react'

const Input = ({type, placeValue, onChangeFun, name}) => {
  return (
    <input type={type} name={name} onChange={(e)=>{onChangeFun(e.target.value)}} placeholder={placeValue} className="inp"/>
    )
}

export default Input