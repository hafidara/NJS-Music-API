import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Artist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  genre: string;

  @Column({ nullable: true })
  bio: string;
}
