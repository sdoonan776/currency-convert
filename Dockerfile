# -----------------------
# Stage 1: Build React
# -----------------------
FROM node:23-alpine AS build-client

WORKDIR /client

# Copy only package.json and package-lock.json first for better caching
COPY client/package*.json ./

# Install client dependencies
RUN npm install

# Copy the rest of the client files
COPY client/ ./

# Build the React app for production
RUN npm run build


# -----------------------
# Stage 2: Setup Server
# -----------------------
FROM node:23-alpine

WORKDIR /server

# Copy only package.json and package-lock.json first for better caching
COPY server/package*.json ./

# Install server dependencies
RUN npm install

# Copy the rest of the server files
COPY server/ ./

# Copy React build output from Stage 1 into server's public/ directory
# (Adjust the path if your server serves static files from another folder)
COPY --from=build-client /client/build ./public

# Expose the port your Node/Express app listens on
EXPOSE 5000

# By default, run the start script
CMD ["npm", "run", "start"]