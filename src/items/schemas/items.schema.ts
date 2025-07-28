import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

