import { Injectable } from '@nestjs/common';
import { PostFeedbackDto } from './dto/postFeedbackDto';

@Injectable()
export class AppService {
  postFeedback(postFeedbackDto): PostFeedbackDto {
    return postFeedbackDto;
  }
}
