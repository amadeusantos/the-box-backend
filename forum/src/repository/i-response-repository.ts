import { ResponseDTO } from "../model/dto/response-dto";
import { ResponseUpdateDTO } from "../model/dto/response-update-dto";
import { Response } from "../model/response";

export abstract class IResponseRepository {
    abstract ResponsesPagination(skip: number, size: number, question_id: string): Promise<Response[]>;
    abstract findResponseById(id: string): Promise<Response | null>;
    abstract createResponse(responseDTO: ResponseDTO): Promise<Response>;
    abstract updateResponse(id: string, responseUpdateDTO: ResponseUpdateDTO): Promise<Response>;
    abstract deleteResponse(id: string): Promise<void>;
}