import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './modules/quiz/quiz.entity';

@Module({
  imports: [QuizModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'quiz',
    entities: [Quiz],
    synchronize: true,
    // autoLoadEntities: true,
  }),
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
