# ---- Build stage: compile the Vite/React site ----
FROM node:22-alpine AS build
WORKDIR /app

# No package-lock.json in this repo, so npm install (not npm ci).
# Copy only the manifest first so dependency layers stay cached across builds.
COPY package.json ./
RUN npm install --no-audit --no-fund

# Copy the rest of the source and build the static bundle.
COPY . .
RUN npm run build

# ---- Serve stage: static files behind nginx ----
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
