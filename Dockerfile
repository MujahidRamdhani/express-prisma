# Gunakan Node.js versi 18 LTS
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Generate Prisma Client
RUN npx prisma generate --schema=prisma/schema.prisma

# Copy semua file aplikasi
COPY . .

# Expose port aplikasi (ubah sesuai dengan konfigurasi aplikasi Anda)
EXPOSE 3003

# Jalankan aplikasi dengan file app.js sebagai entry point
CMD ["node", "src/app.js"]
