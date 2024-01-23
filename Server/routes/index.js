import { Router } from 'express';
import snsRouter from './sns.js';
const api = Router();

api.use('/sns', snsRouter);

export default api;