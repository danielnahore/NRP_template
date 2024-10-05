# Step 1: Build the Vite React application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application source code
COPY . .

# Build the Vite app
RUN npm run build

# Step 2: Use Nginx to serve the built React app
FROM nginx:alpine

# Copy built files from the previous stage
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose the port Nginx runs on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]