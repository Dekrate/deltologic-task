import express, { Request, Response, NextFunction} from 'express';
import axios, { AxiosResponse } from 'axios';
import '../services/service.ts';
const app = express();
app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
    let receivedArray: any[] = req.body;
    let result: number = trap(receivedArray);
    res.send(result);
});