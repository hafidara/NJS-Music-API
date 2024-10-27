import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Playlist } from '../playlists/playlist.entity';

@Entity()
export class Song
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    artist: string;

    @Column({nullable: true})
    mood: string;

    @ManyToMany(() => Playlist, playlist => playlist.songs)
    playlists: Playlist[];

}