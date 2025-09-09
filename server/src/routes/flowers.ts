import { Router, Request, Response } from 'express';

import { getAllFlowers } from '../services/flowersService';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    const flowers = await getAllFlowers();
    res.json(flowers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
