
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artist } from './artist.entity';

@Injectable()
export class ArtistsService
{
  constructor(
    @InjectRepository(Artist)
    private artistsRepository: Repository<Artist>,
  ) {}

  findAll(): Promise<Artist[]>
  {
    return this.artistsRepository.find();
  }

  findOne(id: number): Promise<Artist>
  {
    return this.artistsRepository.findOne({ where: { id } }); // Updated this line
  }

  create(artist: Artist): Promise<Artist>
  {
    return this.artistsRepository.save(artist);
  }

  async update(id: number, artist: Artist): Promise<Artist>
  {
    await this.artistsRepository.update(id, artist);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void>
  {
    await this.artistsRepository.delete(id);
  }

}
