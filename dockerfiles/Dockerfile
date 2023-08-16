### STAGE 1: Build ###
FROM node:20-alpine3.17 AS build
WORKDIR /usr/src/app
COPY ./portfolio/package*.json .

RUN npm install

COPY ./portfolio .
RUN npm install -g @angular/cli
RUN npm audit fix
CMD ng serve --host 0.0.0.0 --poll=2000 --port 4200 --disable-host-check