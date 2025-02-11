# Usar Node.js como base
FROM node:18

# Definir directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Exponer el puerto
EXPOSE 5003

# Comando para iniciar la aplicación
CMD ["node", "src/server.js"]
