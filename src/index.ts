import express, { Request, Response, NextFunction } from 'express';

const app = express();
const PORT = 3000;

// Middleware to log headers
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('Headers:', req.headers);
    next();
});

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello, world!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
