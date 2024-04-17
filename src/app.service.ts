import { Injectable, Inject } from '@nestjs/common';
import { PostFeedbackDto } from './dto/postFeedbackDto';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AppService {
  constructor(@Inject('SUPABASE_CLIENT') private supabase: SupabaseClient) {}

  async postFeedback(postFeedbackDto): Promise<PostFeedbackDto> {
    const { error } = await this.supabase.from('feedback').insert([
      {
        name: postFeedbackDto.name,
        email: postFeedbackDto.email,
        message: postFeedbackDto.message,
      },
    ]);

    if (error) throw new Error('Error inserting user: ' + error.message);
    // return data;
    return postFeedbackDto;
  }
}
