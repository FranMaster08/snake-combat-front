# Usa una imagen base de Node.js
FROM node:current-alpine

# Establece el directorio de trabajo en la aplicación
WORKDIR /usr/src/app

# Copia los archivos de la aplicación al contenedor
COPY package*.json ./
# COPY node_modules ./node_modules/

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

# Compila TypeScript a JavaScript
RUN npm run build

# Expone el puerto en el que la aplicación se ejecuta
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "/usr/src/app/dist/main.js"]