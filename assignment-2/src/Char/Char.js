import React from 'react'

const char = (props) => {

  const style ={
    display: 'inline-lock',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center',
    width: '16px'

  }
  return(
    <div style={style} onClick={props.clicked}>
      {props.character}
    </div>
  )

}
export default char;