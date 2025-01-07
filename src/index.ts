import express, { Request, Response } from 'express';
import cors from 'cors';


const app = express();
const port = 3000;

const allowedOrigins = ['https://killians.club', 'http://localhost'];

const corsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow cookies if needed
};

app.use(cors(corsOptions));

app.get('/', (req: Request, res: Response) => {
    res.send('Express with TypeScript is working!!!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
