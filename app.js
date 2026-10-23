import 'dotenv/config';
import express from 'express';
import testRouter from './src/routes/test.route.js';
import authRouter from './src/routes/auth.route.js';


const app = express();
app.use(express.json());
app.use(testRouter);
app.use(authRouter);
const port = Number(process.env.APP_PORT);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('APP_PORT debe ser un puerto válido entre 1 y 65535.');
}

//app.get('/test', (_req, res) => {
 // res.status(200).json({ status: 'ok', message: 'API funcionando' });
//});

app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`);
});