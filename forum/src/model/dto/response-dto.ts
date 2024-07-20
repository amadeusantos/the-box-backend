import { ResponseUpdateDTO } from "./response-update-dto";

export interface ResponseDTO extends ResponseUpdateDTO {
    question_id: string;
    user_id: string;
}