# Gunakan Node.js versi 18 LTS
FROM node:18

# Set working directory
WORKDIR /app

# Copy file package.json dan package-lock.json terlebih dahulu
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file aplikasi, termasuk direktori prisma
COPY . .

# Generate Prisma Client
RUN npx prisma generate --schema=prisma/schema.prisma

# Expose port aplikasi
EXPOSE 3003

# Jalankan aplikasi
CMD ["node", "src/app.js"]
