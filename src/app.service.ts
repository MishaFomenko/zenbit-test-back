import { Injectable, Inject } from '@nestjs/common';
import { PostFeedbackDto } from './dto/postFeedbackDto';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AppService {
  constructor(@Inject('SUPABASE_CLIENT') private supabase: SupabaseClient) {}

  async postFeedback(postFeedbackDto): Promise<PostFeedbackDto> {
    const { data, error } = await this.supabase.from('feedback').insert([
      {
        name: postFeedbackDto.name,
        email: postFeedbackDto.email,
        message: postFeedbackDto.message,
      },
    ]);
    if (error) throw new Error('Error inserting user: ' + error.message);
    return data;
  }

  async getAllFeedbacks(): Promise<PostFeedbackDto[]> {
    const { data, error } = await this.supabase.from('feedback').select('*');
    if (error) throw new Error('Error inserting user: ' + error.message);
    return data;
  }

  async deleteFeedback(id): Promise<PostFeedbackDto> {
    const { data, error } = await this.supabase
      .from('feedback')
      .delete()
      .match({ id: id });
    if (error) throw new Error('Error inserting user: ' + error.message);
    return data;
  }
}
