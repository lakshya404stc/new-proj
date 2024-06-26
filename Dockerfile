# Use official Node.js image as the base
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock /app/
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN yarn build

# Install serve globally to serve the production build
RUN yarn global add serve

# Expose the port for the application (Vite's default is 3000)
EXPOSE 3002

# Serve the app with serve
CMD ["serve", "-s", "build", "-l", "3002"]
