import { z } from "zod";

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  done: z.boolean(),
  approved: z.boolean(),
  completedDetails: z.string(),
});

export type Task = z.infer<typeof TaskSchema>;

export const RequestEntrySchema = z.object({
  requestId: z.string(),
  originalRequest: z.string(),
  splitDetails: z.string(),
  tasks: z.array(TaskSchema),
  completed: z.boolean(),
});

export type RequestEntry = z.infer<typeof RequestEntrySchema>;

export const TaskManagerFileSchema = z.object({
  requests: z.array(RequestEntrySchema),
});

export type TaskManagerFile = z.infer<typeof TaskManagerFileSchema>;

