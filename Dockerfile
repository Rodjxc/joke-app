# base image that the project is built on

FROM node:latest 

# inside the container, we select the working directory 

WORKDIR /app

# We copy the package.json and the package-lock

COPY package*.json ./

# We install the dependencies inside the container

RUN npm install

# We copy teh rest of the app's source code to the container

COPY . .

# We include the port 5173, that is the one Vite connects to when running the app

EXPOSE 5173

# Not sure if that's the correct one, but to start the app I run npm run dev, so

CMD ["npm", "run", "dev"]