import { IsNotEmpty, Length } from "class-validator"

export class CreateQuestionDto {
    
    @IsNotEmpty ({message: "There should have a question at least"})
    @Length(3,255)
    question : string
}