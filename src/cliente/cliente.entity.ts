import { Entity, Column } from 'typeorm';
import { AbstractEntity } from 'src/common/abstractEntity';

@Entity()
export class Cliente extends AbstractEntity {
  @Column()
  razaoSocial: string;

  @Column({ length: 14 })
  cnpj: string;
}
