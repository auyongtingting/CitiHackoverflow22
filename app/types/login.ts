import { StringValidation } from "zod";

export interface loginSuccessResponse {
  success: boolean;
  accessToken: string;
}

export interface loginUserInput {
  username: string;
  password: string;
}

export interface course {
  courseTitle: string;
  courseDescription: string;
  courseTier: number;
}

export interface courseResponseDTO {
  courseId: string;
  courseTitle: string;
  courseDescription: string;
  courseTier: number;
}

export interface courseTier {
  courseTier: number;
}
