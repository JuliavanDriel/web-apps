FROM ubuntu:20.04

# #update environment
RUN apt-get -y upgrade
RUN apt-get -y update
RUN apt-get -y --with-new-pkgs upgrade
RUN apt-get -y autoremove
RUN apt-get -y install lsb-release libappindicator3-1

# #install chrome
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

# Install Chrome-driver
RUN npm install @sitespeed.io/chromedriver

# Install Selenium
RUN npm install selenium-webdriver

# Copy the directory
COPY . /ChangeFile
WORKDIR /ChangeFile

# Run the filew
CMD node ChangeFile.js

