import { validationResult } from "express-validator"
import Movie from '../models/movie.mjs';

async function getAllMovies(req, res) {
    const movies = await Movie.find().sort({updatedAt: -1})
    res.json(movies)
}

async function getMovieById(req, res) {
    const _id = req.params.id;
    const movie = await Movie.findById(_id)

    if(movie === null) return res.status(404).json({msg: 'Page Not Found'})
    res.json(movie)
}

async function deleteMovie (req, res) {
    const _id = req.params.id;
    const {deletedCount} = await Movie.deleteOne({_id})

    if(deletedCount === 0) return res.status(404).json({msg: 'Target Movie Not Found'})
    res.json({msg: "Delete succeeded."})

}

async function registMovie (req, res) {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const errs =errors.array();
        return res.status(400).json(errs)
    }
    const movie = new Movie(req.body);
    const newMovie = await movie.save();
    res.status(201).json(newMovie)
}

async function updateMovie (req, res) {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const errs =errors.array();
        return res.status(400).json(errs)
    }
    const { title, instructor, rating, comment} = req.body;
    const _id = req.params.id;
    const movie = await Movie.findById(_id);

    if(movie === null) return res.status(404).json({msg: 'Page Not Found'})

    if(title !== undefined) movie.title = title;
    if(instructor !== undefined) movie.instructor = instructor;
    if(rating !== undefined) movie.rating = rating;
    if(comment !== undefined) movie.comment = comment;
    if(req.file) {
        movie.img = `/uploads/${req.file.filename}`;
    }


    const updateMovie = await movie.save();
    res.json(updateMovie)
}

export {getAllMovies, getMovieById, deleteMovie, registMovie, updateMovie}