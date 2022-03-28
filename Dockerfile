FROM ubuntu:20.04

# #update environment
RUN apt-get -y upgrade
RUN apt-get -y update
RUN apt-get -y --with-new-pkgs upgrade
RUN apt-get -y autoremove

# #install chrome
RUN apt-get -y install lsb-release libappindicator3-1
RUN apt -y install wget
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb || true      
RUN apt-get -fy install

# #install curl
RUN apt-get -y install curl wget

#install node
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get -y install nodejs
RUN node --version
RUN npm --version 

# #install pm2
RUN npm install pm2 -g --production


RUN npm install @sitespeed.io/chromedriver
RUN npm install selenium-webdriver

COPY . /SayHello
WORKDIR /SayHello
# COPY . /SayHello
# WORKDIR /SayHello
CMD node SayHello.js
































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


