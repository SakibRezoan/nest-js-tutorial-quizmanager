import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question-dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) {}


    @Post('/create')
    @UsePipes(ValidationPipe)
    async saveQuestions(@Body() createQuestionDto: CreateQuestionDto) {
        return await this.questionService.createNewQuestion(createQuestionDto);
    }

}