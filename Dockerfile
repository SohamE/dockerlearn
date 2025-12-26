FROM node:latest

WORKDIR /app

COPY package.json /app

RUN npm install

# COPY . ./ <- As workdir is already at /app, can be used with relative path
COPY . /app 

# This is optional just for documentation purpose. It says the express server listens to port 80. so it's easier to publish to local port.
EXPOSE 80

CMD ["npm","start"]
