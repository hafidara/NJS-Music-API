import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Playlist } from './playlists/playlist.entity';
import { Song } from './songs/song.entity';
import { Artist } from './artists/artist.entity';
import { PlaylistsModule } from './playlists/playlists.module';
import { SongsModule } from './songs/songs.module';
import { ArtistsModule } from './artists/artists.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DB'),
        entities: [Playlist, Song, Artist],
        synchronize: true,
    }),
  }),
    PlaylistsModule,
    SongsModule,
    ArtistsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
