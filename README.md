# Task Manager (@abyssbugg/task-manager)

A small Model Context Protocol (MCP) server that manages a simple `tasks.json` file.

## Quick Start

- Run with Bun (recommended):

```
bunx @abyssbugg/task-manager --tasks-file ~/Documents/tasks.json
```

- Or set the path via env (defaults to `~/Documents/tasks.json` if omitted):

```
TASK_MANAGER_FILE_PATH=/Users/you/Documents/tasks.json bunx @abyssbugg/task-manager
```

- Using npx is acceptable if Bun is installed (the binary uses a Bun shebang):

```
npx -y @abyssbugg/task-manager --tasks-file ~/Documents/tasks.json
```

## MCP Config Examples

For generic MCP clients (`~/.mcp/servers.json`):

```
{
  "mcpServers": {
    "task-manager": {
      "command": "bunx",
      "args": ["@abyssbugg/task-manager", "--tasks-file", "/Users/you/Documents/tasks.json"]
    }
  }
}
```

For Cursor (`~/.cursor/mcp.json`):

```
{
  "task-manager": {
    "command": "bunx",
    "args": ["@abyssbugg/task-manager", "--tasks-file", "/Users/you/Documents/tasks.json"],
    "working_directory": "/Users/you/Documents"
  }
}
```
