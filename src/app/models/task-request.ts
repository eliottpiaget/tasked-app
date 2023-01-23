import { ProjectResponse } from "./project-response";

export type TaskRequest = {
    name: string;
    description: string;
    startDate: Date;
    endDate ?: Date;
    project: ProjectResponse;
  };