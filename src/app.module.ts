import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaModule } from './empresa/empresa.module';
import { DocumentoModule } from './documento/documento.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';
import { BoletoModule } from './boleto/boleto.module';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('database'),
    }),
    EmpresaModule,
    DocumentoModule,
    UsuarioModule,
    ClienteModule,
    BoletoModule,
  ],
  providers: [ConfigService],
})
export class AppModule {}
