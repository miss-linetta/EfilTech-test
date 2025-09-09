import { Request, Response, Router } from 'express';

import { getAllBouquets } from '../services/bouquetsService';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    const bouquets = await getAllBouquets();
    res.json(bouquets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
