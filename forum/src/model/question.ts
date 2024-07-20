import { Tag } from "./tag";

export interface Question {
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    user_id: string;
    tags: Tag[];
}