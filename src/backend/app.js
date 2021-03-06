import path from 'path';
import express from 'express';
import useDevServer from './devserver';
import indexRouter from './routes';
import db from './models';
import setupPassport from './controllers/passport';

require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.sequelize.sync();
setupPassport(app);

app.use('/api', indexRouter);
if (process.env.NODE_ENV === 'development') useDevServer(app);
else {
  app.use(express.static(path.resolve(__dirname, './public')));
  app.use('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
