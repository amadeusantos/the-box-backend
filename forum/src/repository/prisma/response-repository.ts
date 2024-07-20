import { ResponseDTO } from "../../model/dto/response-dto";
import { ResponseUpdateDTO } from "../../model/dto/response-update-dto";
import { Response } from "../../model/response";
import { IResponseRepository } from "../i-response-repository";
import { prisma } from "./prisma";

export class ResponseRepository extends IResponseRepository {
  public async ResponsesPagination(
    skip: number,
    size: number,
    question_id: string
  ): Promise<Response[]> {
    return await prisma.response.findMany({
      where: { question_id },
      skip,
      take: size,
    });
  }

  public async findResponseById(id: string): Promise<Response | null> {
    return await prisma.response.findUnique({ where: { id } });
  }

  public async createResponse(responseDTO: ResponseDTO): Promise<Response> {
    return await prisma.response.create({ data: responseDTO });
  }
  public async updateResponse(
    id: string,
    responseUpdateDTO: ResponseUpdateDTO
  ): Promise<Response> {
    return await prisma.response.update({
      where: { id },
      data: responseUpdateDTO,
    });
  }
  public async deleteResponse(id: string): Promise<void> {
    await prisma.response.delete({ where: { id } });
  }
}
