import express from 'express';
const Pingrouter = express.Router();
import PingController from '../../controllers/ping.controller';
Pingrouter.get('/',PingController );
export default Pingrouter;