### STAGE 1: Build ###
FROM node:11 as builder

COPY package.json yarn.lock secrets ./

## Storing node modules on a separate layer will prevent unnecessary yarn installs at each build
RUN yarn install && mkdir /app && mv ./node_modules /app

WORKDIR /app

COPY . .

## Build the node app in production mode and store the artifacts in dist folder
RUN yarn start build

### STAGE 2: hosting ###
FROM node:11

## From ‘builder’ stage copy over the artifacts in dist folder to default
RUN mkdir /app && mkdir /app/logs
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/secrets /app/secrets
WORKDIR /app
EXPOSE 8090
CMD ["node","./dist/server.js"]
