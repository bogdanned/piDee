import React from 'react'
import { AbstractedButton } from './landing'
import { CustomInput } from '../generic/CustomInput'
import Sound from 'react-sound'

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
    width: '211px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'top',
    justifyContent: 'center',
    color: '#2E5BFF',
    fontSize: '24px',
    fontWeight: 300
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
    width: '15%'
  },
  icon: {
    backgroundImage: 'url("/img/unlocked.svg")',
    width: '40px',
    height: '40px'
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
      <div style={icon}></div>
      <span style={welcomeMsg}>Welcome, {name}!</span>
    </div>
  )
}
