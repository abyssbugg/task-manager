# Task Manager (@abyssbug/task-manager)

A small Model Context Protocol (MCP) server that manages a simple `tasks.json` file.

## Quick Start

- Run with Bun (recommended):

```
bunx @abyssbug/task-manager --tasks-file ~/Documents/tasks.json
```

- Or set the path via env (defaults to `~/Documents/tasks.json` if omitted):

```
TASK_MANAGER_FILE_PATH=/Users/you/Documents/tasks.json bunx @abyssbug/task-manager
```

- Using npx is acceptable if Bun is installed (the binary uses a Bun shebang):

```
npx -y @abyssbug/task-manager --tasks-file ~/Documents/tasks.json
```

## MCP Config Examples

For generic MCP clients (`~/.mcp/servers.json`):

```
{
  "mcpServers": {
    "task-manager": {
      "command": "bunx",
      "args": ["@abyssbug/task-manager", "--tasks-file", "/Users/you/Documents/tasks.json"]
    }
  }
}
```

For Cursor (`~/.cursor/mcp.json`):

```
{
  "task-manager": {
    "command": "bunx",
    "args": ["@abyssbug/task-manager", "--tasks-file", "/Users/you/Documents/tasks.json"],
    "working_directory": "/Users/you/Documents"
  }
}
```

## HTTP Mode (for Smithery or custom hosting)

- The server can run over HTTP when `MCP_TRANSPORT=http`.
- Endpoints:
  - `GET /health` → `{ ok: true }`
  - `GET /tools` → JSON tool list
  - `POST /call` → Body: `{ "name": "tool_name", "arguments": { ... } }`

Run locally in HTTP mode with Bun:

```
MCP_TRANSPORT=http PORT=3000 bun run dev
# then in another terminal
curl http://localhost:3000/health
curl http://localhost:3000/tools
curl -X POST http://localhost:3000/call -H 'content-type: application/json' -d '{"name":"list_requests","arguments":{}}'
```
