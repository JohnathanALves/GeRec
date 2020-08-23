import { AbstractEntity } from 'src/common/abstractEntity';
import { Column, OneToOne, OneToMany, Entity } from 'typeorm';
import { Empresa } from 'src/empresa/empresa.entity';
import { Remessa } from './remessa.entity';

@Entity()
export class Conta extends AbstractEntity {
  @Column()
  descricao: string;

  @Column()
  banco: string;

  @Column()
  agencia: string;

  @Column({
    unique: true,
  })
  conta: string;

  @Column()
  digito: string;

  @Column({
    default: 0,
    unique: true,
  })
  nossoNumero: number;

  @Column()
  carteira: string;

  @OneToOne(() => Empresa)
  empresa: Empresa;

  @OneToMany(
    () => Remessa,
    remessa => remessa.conta,
  )
  remessas: Remessa[];
}
