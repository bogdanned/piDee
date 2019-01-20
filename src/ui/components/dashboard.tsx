import React from 'react'
import { AbstractedButton } from './landing'
import { CustomInput } from '../generic/CustomInput'

interface Props {
  did: string
  name: string
  inputValue: string
  handleUserInput: (e: React.FormEvent<HTMLInputElement>) => void
  handleButtonClick: (e: React.MouseEvent<HTMLElement>) => void
}

const styles = {
  container: {
    height: '100vh',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'top',
    justifyContent: 'space-between',
    color: 'white',
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
  }
}
export const DashboardComponent: React.SFC<Props> = props => {
  const { container, responseArea, welcomeMsg, button } = styles
  const { name, inputValue, handleButtonClick, handleUserInput } = props

  return (
    <div style={container}>
      <span style={welcomeMsg}>Welcome, {name}.</span>
      <span>Your Vehicle is ready:</span>
      <span>km: 0</span><span>time: 00:00</span><span>Money: 0</span>
      <div style={button}>
        <AbstractedButton text="Receive" onClick={handleButtonClick} color={'primary'} />
      </div>
    </div>
  )
}
