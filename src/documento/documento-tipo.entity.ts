import { AbstractEntity } from 'src/common/abstractEntity';
import { Entity, Column } from 'typeorm';

/**
 * Aqui vamos colocar o tipo do documento e parametros básicos para cada tipo
 */

export enum DocumentoTipoPerfil {
  DM,
  DS,
  NP,
}

@Entity()
export class DocumentoTipo extends AbstractEntity {
  @Column({
    type: 'enum',
    enum: DocumentoTipoPerfil,
  })
  tipo: DocumentoTipoPerfil;

  @Column()
  descricao: string;
}
