import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { bookDto } from './Book.dto';

@Injectable()
export class ModuleService {
  constructor(private prisma: PrismaService) {}
  async create(data: bookDto) {
    const bookeExists = await this.prisma.book.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });

    if (bookeExists) {
      throw new Error('Book already exists');
    }

    const book = await this.prisma.book.create({
      data,
    });
    return book;
  }

  async findAll() {
    return this.prisma.book.findMany();
  }

  async update(id: string, data: bookDto) {
    const bookeExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });
    if (!bookeExists) {
      throw new Error('Book doe not exists');
    }
    return await this.prisma.book.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const bookeExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });
    if (!bookeExists) {
      throw new Error('Book doe not exists');
    }

    return await this.prisma.book.delete({
      where: {
        id,
      },
    });
  }
}
