import express from 'express';
import { clientError, serverError } from '../src/middleware/errorHandler.js';
import router from './routes/index.js';
const app = express();

app.use(express.json());
app.use("/api/v1", router);
app.use(clientError, serverError);


export default app;