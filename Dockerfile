#building
FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install vite --save-dev

RUN npm run build  

#serving
FROM node:14

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

CMD ["serve", "-s", "dist", "-l", "3002"]
