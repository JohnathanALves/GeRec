import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';

@Module({
  providers: [EmpresaService]
})
export class EmpresaModule {}
