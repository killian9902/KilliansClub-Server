import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Configure CORS middleware
app.use(cors({
    origin: 'https://killians.club', // Allow requests from your frontend
    methods: ['GET', 'POST'],       // Specify allowed HTTP methods
    credentials: true,              // Allow credentials (cookies, etc.)
}));

// Middleware to log headers
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('Headers:', req.headers);
    next();
});

// Route handler
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello, world!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
