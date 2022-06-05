import { NextFunction, Request, Response } from "express";
import Book from "./models/book";
import mongoose from "mongoose";


export const Create = (req: Request, res: Response) => {
  res.send(req.body);
};

export const createBook = (req: Request, res: Response) => {
  const { author, name, category, price } = req.body;

  const book = new Book({
    _id: new mongoose.Types.ObjectId(),
    author,
    name,
    category,
    price
  });

  return book
    .save()
    .then((result) => {
      return res.status(201).json({
        book: result
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
};


export const Books = (req: Request, res: Response) => {

  const xmlString = `<books>
                            <book bid = "001">Book 1</book>
                            <book bid = "002">Book 2</book>
                            <book bid = "003">Book 3</book>
                        </books>`;
  res.header('Content-Type', 'text/xml');
  res.send(xmlString);
}
export const GetBook = (req: Request, res: Response) => {

  res.send(req.query.id);
}
