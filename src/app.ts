import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import route from './app/router';
import globalErrorHandler from './app/middlewares/globalErrorHandelar';
import notFound from './app/middlewares/notFound';
import cookieParser from 'cookie-parser';


app.use(express.json());
app.use(cors());
app.use(cookieParser());


// route for api
app.use('/api',route);

app.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        success: 'true',
        message: 'welcome to Blog Project Assignment api ...... ..... ....',
    });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;