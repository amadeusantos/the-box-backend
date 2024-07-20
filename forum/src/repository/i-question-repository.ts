import { QuestionDTO } from "../model/dto/question-dto";
import { Question } from "../model/question";

export abstract class IQuestionRepository {
    abstract QuestionsPagination(skip: number, size: number, tagsId: string[]): Promise<Question[]>;
    abstract findQuestionByid(id: string): Promise<Question | null>;
    abstract createQuestion(questionDTO: QuestionDTO): Promise<Question>;
    abstract deleteQuestion(id: string): Promise<void>;
}