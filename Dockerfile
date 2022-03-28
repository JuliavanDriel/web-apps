FROM ubuntu:20.04
# FROM node:latest
# #update environment
RUN apt-get -y upgrade
RUN apt-get -y update
RUN apt-get -y --with-new-pkgs upgrade
RUN apt-get -y autoremove

# #install chrome
RUN apt-get -y install lsb-release libappindicator3-1
RUN apt -y install wget
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
#  wget wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
# RUN apt install ./google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb || true      
RUN apt-get -fy install

# #install curl
RUN apt-get -y install curl wget
# RUN curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
# RUN bash nodesource_setup.sh
# RUN apt install -y nodejs
# RUN apt-get update -y 
# RUN apt-get install -y imagemagick ffmpeg
# RUN apt-get install -y python-is-python3 python3-dev python3-pip
# RUN apt-get -y install sudo

# RUN python -m pip install pyssim
# RUN apt-get install -y xvfb
# RUN apt-get install -y net-tools iproute2
# RUN adduser sitespeedio
# RUN usermod -aG sudo sitespeedio
# RUN su - sitespeedio
# RUN echo "sitespeedio ALL=(ALL:ALL) NOPASSWD:ALL" | sudo tee "/etc/sudoers.d/sitespeedio"
# # RUN npm install
# RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
# RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
# RUN apt update
# RUN apt install -y google-chrome-stable


# RUN sitespeed.io -n 1 -b chrome https://www.sitespeed.io --video --visualMetrics --xvfb
#install node
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get -y install nodejs
RUN node --version
RUN npm --version 

# #install pm2
RUN npm install pm2 -g --production


RUN npm install @sitespeed.io/chromedriver
# RUN npm install chromedriver
RUN npm install selenium-webdriver

COPY . /SayHello
WORKDIR /SayHello
# COPY . /SayHello
# WORKDIR /SayHello
# CMD node SayHello.js
































# FROM node:latest
# FROM node:latest
# # FROM blueimp/chromedriver
# # FROM selenium/standalone-chrome
# RUN apt-get update && apt-get -y install google-chrome-stable
# RUN npm install
# # RUN docker run -d --name web1 -p 4444:4444 --shm-size="2g" selenium/standalone-chrome:4.1.2-20220217 

# RUN npm install selenium-webdriver 
# # RUN npm install --save-dev @babel/core
# RUN npm install ChromeDriver

# # COPY . /package.json
# COPY . /SayHello
# # COPY  . /node_modules/@types/chromedriver/index
# WORKDIR /SayHello


# # RUN CHROMEDRIVER_FORCE_DOWNLOAD=true npm install chromedriver
# # RUN npm i selenium-webdriver
# # RUN docker -v
# # CMD docker run -d --name web1 -p 4444:4444 --shm-size="2g" selenium/standalone-chrome:4.1.2-20220217

# CMD node SayHello.js


