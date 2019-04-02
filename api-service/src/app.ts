import express from 'express';
import expressValidator from 'express-validator';
import bodyParser from 'body-parser';
import compression from 'compression';
import { readHealth } from './resources/health';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(expressValidator());

app.get('/health', readHealth);

export { app };
