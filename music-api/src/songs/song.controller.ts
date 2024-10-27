import { Controller, Get, Param, Put, Delete, Body, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from './song.entity';

@Controller('songs')
export class SongsController 
{
  constructor(private songsService: SongsService) {}

  @Get()
  findAll()
  {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number)
  {
    return this.songsService.findOne(id);
  }

  @Post()
  create(@Body() song: Song)
  {
    return this.songsService.create(song);
  }

  @Get('mood/:mood')
  findByMood(@Param('mood') mood: string)
  {
    return this.songsService.findByMood(mood);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() song: Song)
  {
    return this.songsService.update(id, song);
  }

  @Delete(':id')
  async remove(@Param('id') id: number)
  {
    await this.songsService.remove(id);
    return { message: 'Song deleted successfully' };
  }

}
