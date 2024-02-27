import express, {Request, Response} from 'express';
import trap from "./utils";

const app = express();
app.use(express.json());
let server: any;
app.post('/api', (req: Request, res: Response) => {
    let receivedArray: number[] = req.body.height; // Odczytaj dane z ciała żądania
    let result: number = trap(receivedArray);
    res.json({ result }); // Odpowiedz w formacie JSON
});

const port = 3000;
server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


