import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsService } from './songs.service';
import { SongsController } from './song.controller';
import { Song } from './song.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  providers: [SongsService],
  controllers: [SongsController],
  exports: [TypeOrmModule],  
})
export class SongsModule {}
