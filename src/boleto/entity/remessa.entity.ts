import { Entity, OneToMany, Column, ManyToOne } from 'typeorm';
import { AbstractEntity } from 'src/common/abstractEntity';
import { Boleto } from './boleto.entity';
import { Conta } from './conta.entity';

@Entity()
export class Remessa extends AbstractEntity {
  @Column()
  statusRemessa: string;

  @ManyToOne(
    () => Conta,
    conta => conta.remessas,
  )
  conta: Conta;

  @OneToMany(
    () => Boleto,
    boleto => boleto.remessa,
  )
  boletos: Boleto[];
}
