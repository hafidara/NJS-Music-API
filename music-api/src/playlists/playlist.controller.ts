import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { Playlist } from './playlist.entity';

@Controller('playlists')
export class PlaylistsController {
  constructor(private playlistsService: PlaylistsService) {}

  @Get()
  findAll()
  {
    return this.playlistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number)
  {
    return this.playlistsService.findOne(id);
  }

  @Post()
  create(@Body() playlist: Playlist)
  {
    return this.playlistsService.create(playlist);
  }

  @Post(':id/songs')
  async addSongsToPlaylist(
    @Param('id') id: number,
    @Body('songIds') songIds: number[],
  ) {
    return this.playlistsService.addSongsToPlaylist(id, songIds);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() playlist: Playlist)
  {
    return this.playlistsService.update(id, playlist);
  }

  @Delete(':id')
  async remove(@Param('id') id: number)
  {
    await this.playlistsService.remove(id);
    return { message: 'Playlist deleted successfully' };
  }
}
