import { Project } from "./project-response";

export type NfcRequest = {
    codeNfc: string;
    active: boolean;
    project: Project;
  };