import { Project } from "./project-response";

export type NfcResponse = {
    id: string;
    codeNfc: string;
    active: boolean;
    project: Project;
  };