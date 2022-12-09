FROM node:alpine 

WORKDIR /server

COPY . /server

EXPOSE 8081

RUN npm install

CMD ["npm", "start"]