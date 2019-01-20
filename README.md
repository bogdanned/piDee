# piDee
Self Sovereign Identity on Microcontroller (Raspberry Pi)

Demo application for a board computer e.g. of a car to rent.
running on raspberry pi
using the Jolocom SSI application (https://github.com/jolocom/)
adapting the Jolocom demo service 

# Background
The concept of self sovereign identity is an attractive identity that works totally de-centralized. This concept uses standardized digital IDs ( https://w3c-ccg.github.io/did-spec/ )

The Id consist of an android app and services.

# Controiller
## Hardware
- Raspberry Pi 3
- Quinat 3.5" display connected to GPIO 
## OS
- Ubuntu Mate
- chromium browser 

## Challenges
The app uses react framework and therefore a up to date browser is required.
OS Raspbian can handle the small display quite good but chromium is to old :-( and not upgradable
OS Ubuntu mate works with up to data chromium V71 and ubuntu 16.04
Full screen and kiosk modus do not work properly. 
chromium has to be started with option no-sandbox
```sh
$ sudo chromium-browser --no-sandbox
```


# Application
Application can be installed and compiled according https://jolocom-lib.readthedocs.io/en/latest/ssoSetUp.html
Compiling takes several minutes.

