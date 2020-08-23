import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  nome: string;

  email: string;

  password: string;

  @OneToOne(type => Usuario)
  @JoinColumn()
  createdBy: Usuario;

  @Column({})
  createdAt: Date;

  @OneToOne(type => Usuario)
  @JoinColumn()
  updatedBy: Usuario;

  @Column()
  updatedAt: Date;
}
