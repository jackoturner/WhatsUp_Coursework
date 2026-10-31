FROM node:22-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci && chown -R node:node /app
COPY --chown=node:node index.html tsconfig.json vite.config.ts ./
COPY --chown=node:node src/ ./src/
USER node

FROM base AS development
EXPOSE 8080
CMD ["npm", "run", "dev", "--", "--port", "8080", "--strictPort"]

FROM base AS build
RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
