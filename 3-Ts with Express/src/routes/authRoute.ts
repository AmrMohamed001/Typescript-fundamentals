import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
	if (req.session && req.session.loggedIn) return next();
	res.status(401).send('not allowed');
}
const router = Router();
router.get('/login', (req: Request, res: Response) => {
	res.send(`
    <form method="POST">
    <div>
        <label>Email</label>
        <input name="email">
    </div>
    <div>
        <label>Password</label>
        <input name="password" type="password">
    </div>
    <button>submit</button>
    </form>
    `);
});
router.post('/login', (req: RequestWithBody, res: Response) => {
	const { email, password } = req.body;
	if (email && password && email === 'hi@' && password === 'hi') {
		req.session = { loggedIn: true };
		res.redirect('/');
	} else {
		res.send('unknown credentials');
	}
});

router.get('/', (req: Request, res: Response) => {
	if (req.session && req.session.loggedIn) {
		res.send(`
        <div>
        <h1>Welcome in our app</h1>
        <a href="/logout">Log-out</a>
        </div>
        `);
	} else {
		res.send(`
        <h1>You are not logged in</h1>
        <a href="/login">Log in</a>
        `);
	}
});

router.get('/logout', (req: Request, res: Response) => {
	req.session = undefined;
	res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
	res.send('welcome to this protected route');
});
export { router };
