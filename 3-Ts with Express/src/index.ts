import express, { Request, Response } from 'express';
import { router } from './routes/authRoute';
import cookieSession from 'cookie-session';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asas'] }));
app.use(router);
app.listen(3000, () => {
	console.log('server started');
});
