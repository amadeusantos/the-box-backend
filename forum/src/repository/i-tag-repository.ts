import { TagDTO } from "../model/dto/tag-dto";
import { Tag } from "../model/tag";

export abstract class ITagRepository {
    abstract ListAllTag(): Promise<Tag[]>;
    abstract findTagByid(id: string): Promise<Tag | null>;
    abstract createTag(tagDTO: TagDTO): Promise<Tag>;
}