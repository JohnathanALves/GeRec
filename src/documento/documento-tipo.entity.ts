import { AbstractEntity } from 'src/common/abstractEntity';
import { Entity, Column } from 'typeorm';

/**
 * Aqui vamos colocar o tipo do documento e parametros básicos para cada tipo
 */
@Entity()
export class DocumentoTipo extends AbstractEntity {
  @Column()
  tipo: string;
}
