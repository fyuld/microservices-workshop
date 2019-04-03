FROM node:11.13.0-alpine

WORKDIR /usr/app

COPY dist ./dist
COPY node_modules ./node_modules
COPY package.json .

RUN ls
RUN ls ./dist