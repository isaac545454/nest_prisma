import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ModuleController],
  providers: [ModuleService, PrismaService],
})
export class ModuleModule {}
