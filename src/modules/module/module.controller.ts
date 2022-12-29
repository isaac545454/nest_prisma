import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { bookDto } from './Book.dto';
import { ModuleService } from './module.service';

@Controller('module')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Post()
  async create(@Body() data: bookDto) {
    return this.moduleService.create(data);
  }

  @Get()
  async findAll() {
    return this.moduleService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: bookDto) {
    return this.moduleService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.moduleService.delete(id);
  }
}
