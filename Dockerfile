# Build to deployment
FROM node:20-slim AS builder
LABEL maintainer="Diogo Cunha"

# Container directory to work
WORKDIR /app

# Copy config files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy all application files
COPY . .

# Build to deployment
RUN npm run build

# Prodctuion image
FROM node:20-slim AS runner
WORKDIR /app

# Environment variable to production
ENV NODE_ENV=production

# CCopy only necessary files to run the application
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Port to be exposed by the container
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]