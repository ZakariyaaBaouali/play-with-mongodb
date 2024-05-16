import { Schema, model, now } from "mongoose";

//1
interface IGenre {
  name: string;
}

interface IMovie {
  title: string;
  description: string;
  published_at: Date;
  thumb_url: string;
  duration: number;
  genres: [IGenre];
}

//2
const genreSchema = new Schema<IGenre>(
  {
    name: String,
  },
  { _id: false }
);

const movieSchema = new Schema<IMovie>({
  title: String,
  description: String,
  published_at: { type: Date, default: now() },
  thumb_url: String,
  duration: Number,
  genres: [genreSchema],
});

//3
export const Movie = model<IMovie>("movies", movieSchema);
