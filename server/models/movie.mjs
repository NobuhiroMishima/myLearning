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
  },
  { timestamps: true }
);



const Movie = model("movie", movieSchema);
export default Movie 


// const movie = new Movie({
//   title:
//     "【2023年最新】【JavaScript＆CSS】ガチで学びたい人のためのWEB開発実践入門（フロントエンド編）",
//   instructor: "CodeMafia",
//   rating: 5,
//   comment:
//     "HTML / CSS / JavaScriptの基礎を学べます。1回では理解が難しかったですが、繰り返し学習することで静的なWebサイトが作成できるようになりました。",
// });

// await movie.save().then((movie) => console.log(movie._id));

// mongoose.connection.close();
