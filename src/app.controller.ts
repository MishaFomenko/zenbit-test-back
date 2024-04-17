import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { PostFeedbackDto } from './dto/postFeedbackDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  postFeedback(@Body() postFeedbackDto: PostFeedbackDto): string {
    // return this.appService.postFeedback(postFeedbackDto);
    console.log(this.appService.postFeedback(postFeedbackDto));
    return JSON.stringify('back successfully triggered');
  }
}
