import express from 'express';
import { Request,Response } from 'express';
import { ServerConfig } from './config';
import V1router from './routers/v1/index.router';
const app = express();

app.use(express.json());
app.use('/api/v1', V1router);



app.listen(ServerConfig.port, () => {
  console.log(`Server is running on http://localhost:${ServerConfig.port}`);
});
