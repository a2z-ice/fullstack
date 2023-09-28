### STAGE 1: Build ###
FROM node:lts-slim AS build
RUN npm install -g @angular/cli@14
WORKDIR /insight-admin-web
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.23.3
COPY ./deploy/insight-admin-web.conf /etc/nginx/nginx.conf
COPY --from=build /insight-admin-web/dist/insight-admin-web /usr/share/nginx/html
