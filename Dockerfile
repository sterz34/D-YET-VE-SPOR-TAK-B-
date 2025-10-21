FROM node:18-alpine

WORKDIR /app

# Install dependencies (production)
COPY package.json package-lock.json* ./
RUN npm ci --only=production || npm install --production

# Copy app
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
