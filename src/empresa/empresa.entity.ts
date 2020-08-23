import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { AbstractEntity } from 'src/common/abstractEntity';

@Entity()
export class Empresa extends AbstractEntity {
  @Column({
    length: 100,
    type: 'varchar',
    nullable: false,
  })
  razaoSocial: string;

  @Column({
    length: 14,
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  cnpj: string;
}
