import { Injectable } from '@nestjs/common';
import { Items } from './interfaces/items.interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Items>) { }

    async findAll(): Promise<Items[]> {
        return await this.itemModel.find().exec();
    };

    async findOne(id: string): Promise<Items | null> {
        return this.itemModel.findOne({ _id: id });
    };

    async create(item: Items): Promise<Items> {
        const createdItem = new this.itemModel(item);
        return await createdItem.save();
    };

    async update(id: string, item: Items): Promise<Items | null> {
        return this.itemModel.findByIdAndUpdate(id, item, { new: true });
    };

    async delete(id: string): Promise<string> {
        await this.itemModel.findByIdAndDelete(id)
        return `item with id: ${id} deleted successfully`
    }

}
