# Multi-stage build for Node.js application
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
