import User from '../models/User';
import * as express from 'express';

const router = express.Router();

router.post('/', (req: express.Request, res: express.Response) => {
    // Do stuff to create a user
});

router.put('/:id', (req: express.Request, res: express.Response) => {
    // Do stuff to edit a user
});

export default router;