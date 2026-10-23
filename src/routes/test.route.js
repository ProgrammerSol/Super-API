import {Router} from "express";
const router = Router();

router.get('/test', (_req, res) => {
  res.status(200).json({ status: 'ok', message: 'API funcionando' });
});

export default router;
