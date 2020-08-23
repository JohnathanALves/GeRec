import { Entity, ManyToOne, Column } from 'typeorm';
import { AbstractEntity } from 'src/common/abstractEntity';
import { Documento } from 'src/documento/documento.entity';
import { Empresa } from 'src/empresa/empresa.entity';
import { Cliente } from 'src/cliente/cliente.entity';
import { Remessa } from './remessa.entity';

@Entity()
export class Boleto extends AbstractEntity {
  codigoBanco: string;

  linhaDigitavel: string;

  localPagamento: string;

  dataVencimento: Date;

  beneficiario: Empresa;

  agencia: string;

  conta: string;

  digitoConta: string;

  emissaoDocumento: Date;

  numeroDocumento: string;

  especieDocumento: string;

  dataProcessamento: Date;

  nossoNumero: number;

  carteira: string;

  especieMoeda: string;

  valorDocumento: number;

  valorDesconto: number;

  valorJuros: number;

  valorPago: number;

  pagador: Cliente;

  avalista: Cliente;

  @ManyToOne(
    () => Remessa,
    remessa => remessa.boletos,
  )
  remessa: Remessa;
}
