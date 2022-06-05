import { Router } from "express";
import { Books, Create, createBook } from "./book.controller";

export const routes = (router: Router) =>{
  router.post('/api/books/create',Create);
  router.get('/api/books',Books);
  router.post('/api/books/createbook', createBook)
}
