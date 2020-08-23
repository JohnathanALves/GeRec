import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';
import { Empresa } from 'src/empresa/empresa.entity';
import { AbstractEntity } from 'src/common/abstractEntity';

@Entity()
export class Documento extends AbstractEntity {
  @OneToOne(type => Empresa)
  @JoinColumn()
  empresa: Empresa;

  @Column()
  vencimento: Date;
}
