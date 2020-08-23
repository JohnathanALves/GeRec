import { Entity, Column, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { Empresa } from 'src/empresa/empresa.entity';
import { AbstractEntity } from 'src/common/abstractEntity';
import { DocumentoTipo } from './documento-tipo.entity';
import { Cliente } from 'src/cliente/cliente.entity';
import { DocumentoParcela } from './documento-parcela.entity';

@Entity()
export class Documento extends AbstractEntity {
  @Column()
  emissao: Date;

  @Column()
  vencimento: Date;

  @Column({
    default: 0,
  })
  totalBruto: number;

  @Column({
    default: 0,
  })
  totalLiquido: number;

  @Column({
    default: 0,
  })
  totalDescontos: number;

  @Column({
    default: 0,
  })
  totalJuros: number;

  @Column({
    default: 0,
  })
  totalMulta: number;

  @OneToMany(
    type => DocumentoParcela,
    parcelas => parcelas.documento,
  )
  parcelas: DocumentoParcela[];

  @OneToOne(type => Empresa)
  @JoinColumn()
  empresa: Empresa;

  @OneToOne(type => Cliente)
  @JoinColumn()
  cliente: Cliente;

  @OneToOne(type => DocumentoTipo)
  @JoinColumn()
  tipo: DocumentoTipo;
}
