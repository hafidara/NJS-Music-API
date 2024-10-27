import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './song.entity';

@Injectable()
export class SongsService
{
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>,
  ) {}

  findByMood(mood: string)
  {
    return this.songsRepository.find({ where: { mood } });
  }

  findAll(): Promise<Song[]>
  {
    return this.songsRepository.find();
  }

  findOne(id: number): Promise<Song>
  {
    return this.songsRepository.findOne({ where: { id } });
  }

  create(song: Song): Promise<Song>
  {
    return this.songsRepository.save(song);
  }

  async update(id: number, song: Song): Promise<Song>
  {
    await this.songsRepository.update(id, song);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void>
  {
    await this.songsRepository.delete(id);
  }
}
