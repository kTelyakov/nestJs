import { TypegooseModule } from 'nestjs-typegoose';
import { ReviewModel } from './review.model';
import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';

@Module({
  controllers: [ReviewController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ReviewModel,
        schemaOptions: {
          collection: 'Review'
        }
      }
    ])
  ]
})
export class ReviewModule {}
