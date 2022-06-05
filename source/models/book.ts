import mongoose, { Schema } from 'mongoose';
import logging from '../config/logging';
import IBook from '../interfaces/book.interface';

const BookSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    category:{type:String,required:false},
    price:{type:Number,required:false}
  },
  {
    timestamps: true
  }
);

BookSchema.post<IBook>('save', function () {
  logging.info('Mongo', 'Checkout the book we just saved: ', this);
});

export default mongoose.model<IBook>('Book', BookSchema);
