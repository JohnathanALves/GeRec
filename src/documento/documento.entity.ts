import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';
import { Empresa } from 'src/empresa/empresa.entity';
import { AbstractEntity } from 'src/common/abstractEntity';
import { DocumentoTipo } from './documento-tipo.entity';
import { Cliente } from 'src/cliente/cliente.entity';

@Entity()
export class Documento extends AbstractEntity {
  @OneToOne(type => Empresa)
  @JoinColumn()
  empresa: Empresa;

  @Column()
  dataCriacao: Date;

  @Column()
  vencimento: Date;

  @Column()
  valorBruto: number;

  @Column()
  valorLiquido: number;

  @Column()
  valorDescontos: number;

  @Column()
  valorJuros: number;

  @OneToOne(type => Cliente)
  @JoinColumn()
  cliente: Cliente;

  @OneToOne(type => DocumentoTipo)
  @JoinColumn()
  tipo: DocumentoTipo;
}
