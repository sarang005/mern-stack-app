# Select a base image
FROM node:16

# Select a working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ./package*.json ./

# Install dependencies
RUN npm install

#  Copy all files from the current directory to the working directory
COPY . .

# Run the app
CMD ["npm", "run", "dev"]