import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Song } from '../songs/song.entity';

@Entity()
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Song, song => song.playlists)
  @JoinTable()
  songs: Song[];
}