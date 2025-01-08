import express, { Request, Response, NextFunction } from 'express';
import cors, { CorsOptions } from 'cors';

const app = express();
const port = 3000;

const allowedOrigins = ['https://killians.club'];

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            // Allow requests with no origin (like mobile apps or Postman)
            callback(null, true);
        } else {
            callback(new Error('CORS Error: This origin is not allowed'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow cookies
};

// Use CORS middleware
app.use(cors(corsOptions));

// Error-handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
  });

// Sample route
app.get('/', (req: Request, res: Response) => {
    res.send('CORS-enabled server in TypeScript');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
