
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaylistsController } from './playlist.controller';
import { PlaylistsService } from './playlists.service';
import { Playlist } from './playlist.entity';
import { SongsModule } from '../songs/songs.module';
import { Song } from '../songs/song.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Playlist, Song]), SongsModule],
  controllers: [PlaylistsController],
  providers: [PlaylistsService],
})
export class PlaylistsModule {}
