import cors from 'cors';
import {routes} from "./routes";
import express from 'express';
import logging from './config/logging';

import mongoose from "mongoose";
import xmlparser from "express-xml-bodyparser";

const NAMESPACE = 'Server';
const app = express();


/** Connect to Mongo */
mongoose.connect('mongodb://localhost:27017/BookShop')
  .then((result) => {
      logging.info(NAMESPACE, 'Mongo Connected');
  })
  .catch((error) => {
      logging.error(NAMESPACE, error.message, error);
  });

/** Log the request */
app.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })

    next();
});

app.use(express.json());
app.use(xmlparser({
  explicitArray: false
}));
app.use(cors());
routes(app);

app.listen(8030, ()=>{
  console.log('listening to port 8030')
});
