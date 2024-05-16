# Use the official Node.js image to build the Angular app
FROM node:18-alpine AS build
WORKDIR /app

# Install the Angular CLI with a specific version
RUN npm install -g @angular/cli@17

# Copy the project files and install dependencies
COPY package*.json ./
RUN npm cache clean --force
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular application for production
RUN npm run build

# Expose the port to run the Angular app
EXPOSE 4200

# Start the Angular application
CMD ["npm", "start"]