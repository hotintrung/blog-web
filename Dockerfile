# Dockerfile

# Use the official Node.js image.
FROM node:16-alpine

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
COPY package.json yarn.lock ./

# Install dependencies.
RUN yarn install

# Copy local code to the container image.
COPY . .

# Build the Next.js application.
RUN yarn build

# Expose the port the app runs on.
EXPOSE 3000

# Run the Next.js application.
CMD ["yarn", "start"]
