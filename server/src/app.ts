import express from 'express';
import cors from 'cors';
import flowersRouter from './routes/flowers';
import bouquetsRouter from './routes/bouquets';
import ordersRouter from './routes/orders';
import detailsRouter from './routes/details';

const app = express();
const PORT = 3001;

app.use(cors());

app.use(express.json());

app.use('/flowers', flowersRouter);
app.use('/bouquets', bouquetsRouter);
app.use('/orders', ordersRouter)
app.use('/orders/details', detailsRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
