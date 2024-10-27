import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from './playlist.entity';
import { Song } from '../songs/song.entity';

@Injectable()
export class PlaylistsService {
  constructor(
    @InjectRepository(Playlist)
    private playlistsRepository: Repository<Playlist>,
    @InjectRepository(Song)
    private songsRepository: Repository<Song>,
  ) {}

  findAll() {
    return this.playlistsRepository.find({ relations: ['songs'] });
  }

  findOne(id: number) {
    return this.playlistsRepository.findOne({ where: { id }, relations: ['songs'] });
  }

  create(playlist: Playlist) {
    return this.playlistsRepository.save(playlist);
  }
  async update(id: number, playlist: Playlist): Promise<Playlist>
  {
    await this.playlistsRepository.update(id, playlist);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void>
  {
    await this.playlistsRepository.delete(id);
  }

  async addSongsToPlaylist(id: number, songIds: number[]): Promise<Playlist> {
    const playlist = await this.playlistsRepository.findOne({
      where: { id },
      relations: ['songs'],
    });
    if (!playlist) {
      throw new Error('Playlist not found');
    }
    const songs = await this.songsRepository.findByIds(songIds);
    playlist.songs = [...playlist.songs, ...songs];
    return this.playlistsRepository.save(playlist);
  }
}
