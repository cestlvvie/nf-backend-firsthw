import { Router } from 'express';
import authRouter from './auth/auth-router';
import eventRouter from './events/event-router';
// other routers can be imported here

const globalRouter = Router();


globalRouter.use('/', eventRouter); 
globalRouter.use('/', authRouter)

// other routers can be added here

export default globalRouter;
