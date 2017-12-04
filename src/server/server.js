// tab server

import http from 'http';
import path from 'path';
import express from 'express';
import router from './routes';

const port = 3500;

const app = express();
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '../../', 'src/template'));
app.use(express['static'](path.join(__dirname, '../../', 'dist/public')));

router.register(app);

const server = http.createServer(app).listen(port);
console.log(`server started on port ${port}`);
