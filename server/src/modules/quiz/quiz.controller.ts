import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuizDto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

    constructor(private readonly quizService: QuizService) {}

    @Get('/')

    getAllQuiz() {
        return this.quizService.getAllQuiz();
    }

    @Post('/create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)

    async createQuiz(@Body() quizData: CreateQuizDto) {
        return await this.quizService.createNewQuiz(quizData);
    }
}
