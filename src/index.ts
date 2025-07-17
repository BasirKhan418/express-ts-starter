import express from 'express';
import { Request,Response } from 'express';
const app = express();

app.get('/ping', (req: Request, res: Response) => {
  res.send('Pong');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
