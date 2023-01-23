import { UserResponse } from "./user-response";
import { ProjectResponse } from "./project-response";

export type TaskResponse = {
    id: string;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    project: ProjectResponse;
    user: UserResponse;
  };