
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { Artist } from './artist.entity';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  findAll() {
    return this.artistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.artistsService.findOne(id);
  }

  @Post()
  create(@Body() artist: Artist) {
    return this.artistsService.create(artist);
  }

  

  @Put(':id')
  update(@Param('id') id: number, @Body() artist: Artist)
  {
    return this.artistsService.update(id, artist);
  }

  @Delete(':id')
  async remove(@Param('id') id: number)
  {
    await this.artistsService.remove(id);
    return { message: 'Artist deleted successfully' };
  }
}
