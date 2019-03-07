import React from 'react'

const userOutputStyle = {
  padding: '2%',
  margin: '5% 20%',
  border: '1px solid rgba(233,230,233,0.3)',
  fontFamily: 'Lucida Sans Regular',
  fontSize: '1.3em',
  color: 'white',
  backgroundColor: 'rgba(233,230,233,0.1)'
}

const userOutput = (props) => {
  return (
    <div style={userOutputStyle}>
      <h3>Welcome, {props.username}!!</h3>
      <p>This is a sweet site!</p>
      <p>I don't own the background image btw (If you see one)!!</p>
    </div>
  )
} 

export default userOutput