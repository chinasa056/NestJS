import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Items } from './interfaces/items.interfaces';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    findAll(): Promise<Items[]> {
        return this.itemsService.findAll()
    };

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Items | null> {
        return this.itemsService.findOne(id);
    };

    @Post()
    create(@Body() createitemdto: CreateItemDto): Promise<Items> {
        return this.itemsService.create(createitemdto);
    };

    @Put(':id')
    update(@Param('id') id: string, @Body() updateitemdto: CreateItemDto): Promise<Items | null> {
        return this.itemsService.update(id, updateitemdto);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<string> {
        return this.itemsService.delete(id)
    }
}
