import { Task } from "./task-response";

export type NfcResponse = {
    id: string;
    name: string;
    description: string;
    image: string;
    task: Task;
  };