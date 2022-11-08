import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuizDto } from "./dto/CreateQuizDto";
import { Quiz } from "./quiz.entity";

@Injectable()
export class QuizService {
    constructor (@InjectRepository (Quiz) private quizRepository: Repository<Quiz>) { }
    
    getAllQuiz() {
        return [1,2,3,4,6,5];
    }

    async createNewQuiz(createQuizDto: CreateQuizDto) {
        return await this.quizRepository.save(createQuizDto);
    }
}