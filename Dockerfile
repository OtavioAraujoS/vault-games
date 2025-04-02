# Use a imagem oficial do Node.js como base
FROM node:18-alpine AS builder

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /src

# Copie os arquivos necessários para o contêiner
COPY package.json package-lock.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Compile o projeto
RUN npm run build

# Use uma imagem leve para servir os arquivos estáticos
FROM nginx:alpine AS production

# Copie os arquivos compilados para o diretório padrão do Nginx
COPY --from=builder /src/dist /usr/share/nginx/html

# Exponha a porta padrão do Nginx
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]