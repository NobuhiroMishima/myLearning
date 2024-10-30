import express from 'express';
import { body } from "express-validator"
import {getAllMovies, getMoviesByPage, getMovieById, deleteMovie, registMovie, updateMovie } from '../controllers/movies.mjs';
import { requestErrorHandler } from '../helpers/helper.mjs';
import upload from '../helpers/upload.mjs'

const router = express.Router();

router.get('/', requestErrorHandler(getAllMovies))

router.get('/page', requestErrorHandler(getMoviesByPage));

router.get('/:id', requestErrorHandler(getMovieById))

router.delete('/:id', requestErrorHandler(deleteMovie))

router.post('/',
    body('title').notEmpty(),
    body('instructor').notEmpty(),
    body('rating').notEmpty().isInt({min: 1, max: 5}),
    body('comment').notEmpty(),
    body('complete').notEmpty(),
    body('img').notEmpty(),
    upload.single('img'),
    requestErrorHandler(registMovie)
)

router.patch('/:id',
    body('title').optional().notEmpty(),
    body('instructor').optional().notEmpty(),
    body('rating').optional().notEmpty().isInt({min: 1, max: 5}),
    body('comment').optional().notEmpty(),
    body('complete').optional().notEmpty(),
    upload.single('img'),
    requestErrorHandler(updateMovie)
)



export default router;