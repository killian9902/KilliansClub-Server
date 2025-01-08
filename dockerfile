FROM node:20.16.0

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Give NPM run build permission to delete file 'build'
RUN chmod -R 755 /app

RUN npm run build


EXPOSE 3000

CMD ["npm", "run", "start"]