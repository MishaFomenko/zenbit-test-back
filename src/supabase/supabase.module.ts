import { Module, Global } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'SUPABASE_CLIENT',
      useFactory: (configService: ConfigService) => {
        // const supabaseUrl = configService.get<string>(
        //   'https://djpaaehaillapvdhpzud.supabase.co',
        // );
        const supabaseUrl = 'https://djpaaehaillapvdhpzud.supabase.co';
        // const supabaseKey = configService.get<string>(
        //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqcGFhZWhhaWxsYXB2ZGhwenVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzODM3OTAsImV4cCI6MjAyODk1OTc5MH0.41xxYqcJVHTo1YX9IVfjzof_yeNux1l870wIgEfwZv0',
        // );
        const supabaseKey =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqcGFhZWhhaWxsYXB2ZGhwenVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzODM3OTAsImV4cCI6MjAyODk1OTc5MH0.41xxYqcJVHTo1YX9IVfjzof_yeNux1l870wIgEfwZv0';
        return createClient(supabaseUrl, supabaseKey);
      },
      inject: [ConfigService],
    },
  ],
  exports: ['SUPABASE_CLIENT'],
})
export class SupabaseModule {}
