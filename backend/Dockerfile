FROM node:16


# Set working directory to app directory
WORKDIR /app

# Change the user to 'node'
# install dependencies
RUN npm install nodemon -g
COPY package.json .
RUN npm install
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 5000
CMD [ "nodemon", "./bin/www"]