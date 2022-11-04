import express from 'express';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import router from './routers';

const app = express();

app.use(express.json());
app.use(router);

app.use(httpErrorMiddleware);

export default app;
