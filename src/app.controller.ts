import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PostFeedbackDto } from './dto/postFeedbackDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  postFeedback(
    @Body() postFeedbackDto: PostFeedbackDto,
  ): Promise<PostFeedbackDto> {
    return this.appService.postFeedback(postFeedbackDto);
  }

  @Get()
  getAllFeedbacks(): Promise<PostFeedbackDto[]> {
    return this.appService.getAllFeedbacks();
  }

  @Delete(':id')
  deleteFeedback(@Param('id') id: string): Promise<PostFeedbackDto> {
    return this.appService.deleteFeedback(id);
  }
}
