import { AbstractEntity } from 'src/common/abstractEntity';
import { ManyToOne, Entity, Column, OneToOne } from 'typeorm';
import { Documento } from './documento.entity';
import { Boleto } from '../boleto/entity/boleto.entity';

export enum SituacaoParcela {
  ABERTA = 'A',
  PAGA = 'P',
}

@Entity()
export class DocumentoParcela extends AbstractEntity {
  @Column()
  parcela: number;

  @Column()
  emissao: Date;

  @Column()
  vencimento: Date;

  @Column()
  valorBruto: number;

  @Column()
  valorLiquido: number;

  @Column()
  valorJuros: number;

  @Column()
  valorMulta: number;

  @Column({
    type: 'enum',
    enum: SituacaoParcela,
    default: SituacaoParcela.ABERTA,
  })
  situacao: SituacaoParcela;

  @Column()
  dataPagamento: Date;

  @OneToOne(type => Boleto)
  boleto: Boleto;

  @ManyToOne(
    type => Documento,
    documento => documento.parcelas,
  )
  documento: Documento;
}
