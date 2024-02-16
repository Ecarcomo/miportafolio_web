FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
VOLUME ["C:/Proyectos/webs/miportafolio_web/","/app"]

CMD ["npm","start"]
#Para produccion
#RUN npm run build
#Para desarrollo
#RUN npm start

#FROM nginx
#COPY --from=builder /app/build /usr/share/nginx/html