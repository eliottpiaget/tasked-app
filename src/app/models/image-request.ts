import { Task } from "./task-response";

export type NfcRequest = {
    name: string;
    description: string;
    image: string;
    task: Task;
  };