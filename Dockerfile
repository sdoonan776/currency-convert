FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# RUN npm ci --only=production

COPY . .

EXPOSE 8080

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

CMD [ "node", "server.ts" ]



