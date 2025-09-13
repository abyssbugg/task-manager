# Task Manager (@abyssbugg/task-manager)

A small Model Context Protocol (MCP) server that manages a simple `tasks.json` file.

## Install

- Using Bun: `bunx @abyssbugg/task-manager --tasks-file ~/Documents/tasks.json`
- Using NPX: `npx @abyssbugg/task-manager --tasks-file ~/Documents/tasks.json`

## Usage

- Provide the tasks file via environment variable:

```
TASK_MANAGER_FILE_PATH=/Users/you/Documents/tasks.json task-manager
```

- Or via CLI flag:

```
task-manager --tasks-file /Users/you/Documents/tasks.json
```

## MCP Config Example

Add an entry to your `~/.cursor/mcp.json` to run the server locally:

{
  "task-manager": {
    "command": "bun",
    "args": ["/Users/you/Documents/mcp-taskmanager/dist/index.js"],
    "env": {"TASK_MANAGER_FILE_PATH": "/Users/you/Documents/tasks.json"},
    "working_directory": "/Users/you/Documents"
  }
}
