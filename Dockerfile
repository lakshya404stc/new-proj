# Stage 1: Install dependencies and build the application
FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .
RUN npm run build  

# Stage 2: Serve the application
FROM node:14

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

CMD ["serve", "-s", "dist", "-l", "3002"]
