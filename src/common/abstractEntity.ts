import { Usuario } from 'src/usuario/usuario.entity';
import { Column, JoinColumn, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

export class AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
