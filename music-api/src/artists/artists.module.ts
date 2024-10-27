import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from './artist.entity';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artist.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Artist])],
  controllers: [ArtistsController],
  providers: [ArtistsService],
})
export class ArtistsModule {}