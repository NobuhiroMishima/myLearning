import express from 'express';
import moviesRouter from './movies.mjs'
import imageRouter from './images.mjs'

const router = express.Router();
router.use('/movies', moviesRouter);

router.use('/default-image', imageRouter)

export default router;