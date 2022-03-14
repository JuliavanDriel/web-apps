FROM node:alpine

COPY . /SayHello
WORKDIR /SayHello

CMD node SayHello.js


