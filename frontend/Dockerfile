FROM node:16

# Create app directory
# Set working directory to app directory
WORKDIR /app

# install dependencies
COPY package.json .
RUN npm install
#Expose port and start application
EXPOSE 3000

CMD [ "npm", "start"]