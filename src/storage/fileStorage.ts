import * as fs from "node:fs/promises";
import * as path from "node:path";
import { TaskManagerFile, TaskManagerFileSchema } from "../domain/schema.js";

export async function ensureParentDir(filePath: string): Promise<void> {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
}

export async function loadTaskManagerFile(filePath: string): Promise<TaskManagerFile | null> {
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const parsed = JSON.parse(raw);
    const validated = TaskManagerFileSchema.safeParse(parsed);
    if (!validated.success) {
      console.error("Invalid tasks file schema; ignoring loaded data:", validated.error.message);
      return null;
    }
    return validated.data;
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    if (msg.includes("ENOENT")) return null;
    console.error("Failed to load tasks file:", msg);
    return null;
  }
}

export async function saveTaskManagerFileAtomic(filePath: string, data: TaskManagerFile): Promise<void> {
  await ensureParentDir(filePath);
  const tmpPath = `${filePath}.tmp`;
  const payload = JSON.stringify(data, null, 2);
  await fs.writeFile(tmpPath, payload, "utf-8");
  await fs.rename(tmpPath, filePath);
}

