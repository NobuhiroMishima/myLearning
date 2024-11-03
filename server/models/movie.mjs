import mongoose, { set, connect, Schema, model } from "mongoose";
import env from "dotenv";
env.config();

set("strictQuery", true);
connect(process.env.MONGO_URI);

const movieSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
      get: function (val) {
        return Math.round(val);
      },
      set: function (val) {
        return Math.round(val);
      },
    },
    comment: {
      type: String,
      required: true,
    },
    complete: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);



const Movie = model("movie", movieSchema);
export default Movie 

