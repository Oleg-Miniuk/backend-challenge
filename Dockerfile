FROM node:13.10.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1342
CMD [ "npm", "start" ]
