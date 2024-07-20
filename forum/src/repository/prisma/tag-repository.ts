import { TagDTO } from "../../model/dto/tag-dto";
import { Tag } from "../../model/tag";
import { ITagRepository } from "../i-tag-repository";
import { prisma } from "./prisma";

export class TagRepository extends ITagRepository {
  public async ListAllTag(): Promise<Tag[]> {
    return await prisma.tag.findMany();
  }
  public async findTagByid(id: string): Promise<Tag | null> {
    return await prisma.tag.findUnique({ where: { id } });
  }
  public async createTag(tagDTO: TagDTO): Promise<Tag> {
    return await prisma.tag.create({ data: tagDTO });
  }
}
