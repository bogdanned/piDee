# piDee
Self Sovereign Identity on Microcontroller (Raspberry Pi)

- demo application for a board computer e.g. of a car to rent.
- running on raspberry pi
- using the Jolocom SSI application (https://github.com/jolocom/)
- adapting the Jolocom demo service 

# Background
The concept of self sovereign identity is an attractive identity that works totally de-centralized. 
This concept uses standardized digital IDs ( https://w3c-ccg.github.io/did-spec/ )

The Id consist of an android app and services.

# Controiller
## Hardware
- Raspberry Pi 3
- Quinat 3.5" display connected to GPIO
- connect display to Raspberry pi socket
- connect 5V power supply, keyboard and mouse to pi 

## Installation
### OS Installation
The used react framework requires chromium version 65 and therefore Raspbian version 9 stretch 
Download Raspbian strech based on Ubuntu 16.04 https://www.raspberrypi.org/downloads/raspbian/
choose Raspbian Stretch with desktop and recommended software
identify SD card slot  and burn SD card
```sh
$ lsblk
$ sudo dd of=/dev/mmcblk0 if=raspbi.img bs=1M count=8000
```
insert SD-card into Pi
connect Raspberry to Internet 
- by ethernet cable or 
- connect monitor to HDMI socket and configure W-LAN

open ssh connection to raspberry to download display drivers
```sh
$ ssh  pi@192.168.178.41
```
at promt pi@raspberrypi:~ $ run:
```sh
$ sudo rm -rf LCD-show
$ git clone https://github.com/goodtft/LCD-show.git
$ chmod -R 755 LCD-show
$ cd LCD-show/cd 
$ sudo ./LCD35-show
```
after reboot the LCD display is visible
chromium version should be 65 or higher
```sh
$ chromium-browser -version
```
increase size of SD card to 16 GB, e.g. with gparted

### Application Installation
Application is based on https://jolocom-lib.readthedocs.io/en/latest/ssoSetUp.html
Database has to be installed first
```sh
$ # database installation
$  sudo apt-get update
$  sudo apt-get install redis-server
$ # database start
$ redis-server
 Warning: no config file specified, using the default config.
 Server started, Redis version 2.2.12
 The server is now ready to accept connections on port 6379
 ... more logs ...
$ redis-cli ping
PONG
$
```
```sh
$ git clone  https://github.com/bogdanned/piDee; cd piDee/
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt-get update
$ sudo apt-get install yarn
$ yarn install
```
All sofware is available now.
The compiling of application can be started from piDee folder

```sh
$ yarn start
```
Compiling takes several minutes.
