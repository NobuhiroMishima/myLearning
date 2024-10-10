import express from 'express';
import moviesRouter from './movies.mjs'

const router = express.Router();
router.use('/movies', moviesRouter);

export default router;