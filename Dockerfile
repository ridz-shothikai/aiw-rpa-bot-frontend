# Step 1: Build stage
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Step 2: Runtime stage
FROM node:18

# Set working directory
WORKDIR /app

# Copy built assets from the build stage
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json ./

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
