# Stage 1: Build the Angular application
FROM node:latest AS build

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Build the Angular app for production
RUN npm run build

# Stage 2: Use Nginx for serving the Angular app
FROM nginx:latest

# Copy the built app from the previous stage to Nginx's default public folder
COPY --from=build /app/dist/* /usr/share/nginx/html/
