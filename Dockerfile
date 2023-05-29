# Stage 1: Build node environment
FROM node:20.2.0-alpine AS builder

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install --global pnpm

# Copy the package.json and lock file
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy rest of the application source code
COPY . .

# Build the application
RUN pnpm run build

# Stage 2: Build Ruby environment
FROM ruby:2.7

# Set the working directory
WORKDIR /app

# Copy Gemfile and Gemfile.lock
COPY Gemfile Gemfile.lock ./

# Install bundle dependencies
RUN bundle install

# Copy rest of the application source code
COPY . .

# Copy built node app from the builder stage
COPY --from=builder /app .

# Build Jekyll site
RUN bundle exec jekyll build

# Expose port 4000 for the app
EXPOSE 4000

# Expose LiveReload port
EXPOSE 35729

# Run the app when the container launches
CMD ["bundle", "exec", "jekyll", "serve", "--livereload", "--host=0.0.0.0"]
