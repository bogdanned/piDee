import React from 'react'
import { Dialog, DialogTitle, withStyles } from '@material-ui/core'
import { loginProviders } from '../../reducers'

interface Props {
  onClose: () => void 
  open: boolean
  provider: loginProviders
  qrCode: string
}

const ModifiedDialog = withStyles({
  paper: {
    top: "0px",
    maxHeight: "100%",
    margin: "0px",
    maxWidth: "100%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'top',
    justifyContent: 'center',
    padding: '0%',
    height: '320px',
    width: '320px',
    position: 'absolute',
    left: '0px'
  },
})(Dialog)

export const LoginDialog: React.SFC<Props> = props => {
  const isJolocom = props.provider === loginProviders.jolocom
  const { title, text } = getContentByProvider(props.provider)

  return (
    <ModifiedDialog 
    onExit={props.onClose}
    onEscapeKeyDown={props.onClose}
    onBackdropClick={props.onClose}
    open={props.open}>
      {/*<DialogTitle> {title} </DialogTitle>*/}
      <span> {text} </span>
      {isJolocom ? <img src={props.qrCode} width={'100%'}/> : null}
    </ModifiedDialog>
  )
}

interface dialogContent {
  title: string
  text: string
}

const getContentByProvider = (loginProvider: loginProviders): dialogContent => {
  switch (loginProvider) {
    case loginProviders.facebook:
      return {
        title: 'Continue with Facebook',
        text: 'Nope!'
      }
    case loginProviders.linkedIn:
      return {
        title: 'Continue with LinkedIn',
        text: 'Wrong button!'
      }
    case loginProviders.jolocom:
      return {
        // title: 'Scan with Jolocom',
        title: '',
        text: ''
      }
    default:
      return {
        title: '',
        text: ''
      }
  }
}
