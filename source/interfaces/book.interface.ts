import { Document } from 'mongoose';

export default interface IBook extends Document {
  name: string;
  author: string;
  category:string;
  price:number;
}
