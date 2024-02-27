FROM node:latest

WORKDIR /source

COPY . .

RUN npm install

RUN npm run build

RUN npm test

RUN npm run dev
