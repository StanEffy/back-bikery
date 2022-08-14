FROM node:16

# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install pm2 -g
# Bundle app source
COPY . .
EXPOSE 8080
CMD ["pm2-runtime", "app.js"]
