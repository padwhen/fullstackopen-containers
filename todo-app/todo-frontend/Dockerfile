FROM node:16 as build-stage

WORKDIR /usr/src/app

ENV REACT_APP_BACKEND_URL=http://localhost:3000

COPY . .

RUN npm ci

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

FROM build-stage as test-stage
ENV CI=true
RUN npm run test