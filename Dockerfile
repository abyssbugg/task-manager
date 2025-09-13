FROM oven/bun:1

WORKDIR /app

# Install dependencies and build with Bun
COPY package.json tsconfig.json biome.json README.md LICENSE ./
COPY index.ts ./index.ts
COPY src ./src

RUN bun install && bun run build

# Default command
ENV MCP_TRANSPORT=http
ENV PORT=3000
EXPOSE 3000
CMD ["bun", "dist/index.js"]
