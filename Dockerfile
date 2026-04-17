FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
RUN mkdir -p /app/data
EXPOSE 3000
CMD ["sh", "-c", "[ ! -f /app/data/ramais.json ] && cp /app/ramais.json /app/data/ramais.json; node server.js"]
