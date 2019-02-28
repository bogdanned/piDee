import React from 'react'
import { AbstractedButton } from './landing'
import { CustomInput } from '../generic/CustomInput'
import Sound from 'react-sound'
import pay from "./payment"
import color from '@material-ui/core/colors/amber';

interface Props {
  did: string
  name: string
  inputValue: string
  handleUserInput: (e: React.FormEvent<HTMLInputElement>) => void
  handleButtonClick: (e: React.MouseEvent<HTMLElement>) => void
}

const styles = {
  container: {
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'top',
    justifyContent: 'center',
    color: '#2E5BFF',
    fontSize: '24px',
    fontWeight: 300,
    padding: '10px'
  } as React.CSSProperties,
  responseArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '3%'
  } as React.CSSProperties,
  welcomeMsg: {
    marginTop: '5%'
  },
  button: {
    marginBottom: '3%',
    width: '15%',
  },
  icon: {
    backgroundImage: 'url("/img/unlocked.svg")',
    width: '40px',
    height:'40px'
  },
}


export const DashboardComponent: React.SFC<Props> = props => {
  const { container, responseArea, welcomeMsg, button, icon } = styles
  const { name, inputValue, handleButtonClick, handleUserInput } = props

  return (
    <div style={container}>
      <Sound {...props} 
        url="sound.mp3"
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
      />
      <span></span>
      <div style={icon}></div>
      <span style={welcomeMsg}>Welcome, {name}! </span>
      {/* check whether user is eligable  */}
      {/* http://localhost:8080/people/search/findByLastName?name=Mahnke */}

      <span style={welcomeMsg}>you are eligable to rent the car </span>
      
      {/* check whether car is available  */}
      {/* http://localhost:8080/cars/search/findByNumberPlate?numberPlate=B-MW123s */}
      
      <span style={welcomeMsg}>Booking time end: 20:00 Uhr </span>
      <span style={welcomeMsg}>-</span>
     

      {/* <button onClick={handleUserInput}> Payment </button> */}
      <button style={{width:'100%',height:'120px', borderRadius: '8px', background: 'steelblue'}} onClick={handleButtonClick}> Book car </button>
    </div>
  )
}