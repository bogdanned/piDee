import * as React from 'react'
import Button from '@material-ui/core/Button'
import { PropTypes } from '@material-ui/core'
import { loginProviders } from '../../reducers'
import { LoginDialog } from './dialog'

interface Props {
  initiateLogin: (name: loginProviders) => void
  selectedLoginProvider: loginProviders
  qrCode: string
}

interface State { }

// TODO Abstract?
export class LandingComponent extends React.Component<Props, State> {
  getStyles() {
    return {
      icon: {
        backgroundImage: 'url("/img/locked.svg")',
        width: '40px',
        height: '40px'
      },
      smallContainer: {
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        width: "300px",
        height: "170px",
        marginTop: "20px"
      },
      pageBackground: {
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'left',
        height: '100vh',
        /*backgroundImage: 'url("/img/SSO_bg.jpg")',*/
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      } as React.CSSProperties,
      loginOptionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'space-between',
        maxWidth: '600px',
        maxHeight: '500px',
        width: '40vw',
        height: '40vh',
        minWidth: '400px',
        minHeight: '300px',
        borderRadius: '5px',
        backgroundColor: 'white'
      } as React.CSSProperties,
      titleText: {
        fontSize: '20px',
        fontWeight: 300,
        color: '#8097B1'
      }
    }
  }

  render() {
    const { titleText, loginOptionsContainer, pageBackground, icon, smallContainer } = this.getStyles()
    return (
      <div style={pageBackground}>
        <div style={loginOptionsContainer}>
          <div style={{ ...smallContainer, "flexDirection": "column" }}>
            {!this.props.qrCode &&
              <div>
                <div style={icon}></div>
                <div style={titleText}> BMW 13  </div>
                <div style={titleText}> Status: <strong>Available </strong></div>
                <div style={titleText}></div>
                <div style={titleText}> Verification of the </div>
                <div style={titleText}> driver license needed.</div>
              </div>
            }

            <div style={{marginTop: "10px"}}>
              <img src={this.props.qrCode} width={'100%'} />
            </div>
          </div>

          {/* <AbstractedButton
            color={'secondary'}
            text={'Continue with LinkedIn'}
            imageName={'LI_icon.svg'}
            onClick={() => this.props.initiateLogin(loginProviders.linkedIn)}
          />
          <AbstractedButton
            color={'secondary'}
            text={'Continue with Facebook'}
            imageName={'FB_icon.svg'}
            onClick={() => this.props.initiateLogin(loginProviders.facebook)}
          /> */}
          {/* <div style={{ color: 'grey' }}> or </div> */}
          {!this.props.qrCode &&
            <AbstractedButton
            text={'Unlock'}
            imageName={'JO_icon.svg'}
            color={'primary'}
            onClick={() => this.props.initiateLogin(loginProviders.jolocom)}
          />
          }
          {this.props.qrCode &&
            <AbstractedButton
            text={'Please Auth'}
            imageName={'JO_icon.svg'}
            color={'secondary'}
            onClick={() => this.props.initiateLogin(loginProviders.jolocom)}
          />}

        </div>
        {/* <LoginDialog
          open={this.props.selectedLoginProvider !== loginProviders.none}
          provider={this.props.selectedLoginProvider}
          qrCode={this.props.qrCode}
          onClose={() => this.props.initiateLogin(loginProviders.none)}
        />  */}
      </div>
    )
  }
}

interface ButtonProps {
  color: PropTypes.Color
  onClick: (e: React.MouseEvent<HTMLElement>) => void
  imageName?: string
  text: string
}

export const AbstractedButton: React.SFC<ButtonProps> = props => {
  const buttonStyle = {
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '200px',
    height: '130px',
    margin: '10px'
  }

  const { color, onClick, imageName, text } = props
  return (
    <Button style={buttonStyle} variant="contained" color={color} onClick={onClick}>
      <img height={16} style={{ marginRight: '5%' }} src={`/img/${imageName}`} />
      {text}
    </Button>
  )
}
