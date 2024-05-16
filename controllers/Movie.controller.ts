import { Router, Request, Response } from "express";
import { Movie } from "../models/Movie";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import { AddMovieDto } from "../dto/Movie.dto";

const route = Router();
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "storage");
  },
  filename(req, file, cb) {
    const newFileName = `${uuidv4()}.${file.mimetype.split("/")[1]}`;
    req.thumb = newFileName;
    cb(null, newFileName);
  },
});
const upload = multer({ dest: "/storage", storage: storage });

//test route
route.get("/", (req: Request, res: Response) => {
  return res.status(200).send("Movie controller working....!🚀🚀🚀");
});

route.post("/add-movie", async (req: Request, res: Response) => {
  const payload = <AddMovieDto>req.body;

  //no valiadtion for now
  const newMovie = await Movie.create({
    title: payload.title,
    description: payload.description,
    thumb_url: "",
    duration: payload.duration,
    genres: payload.genres,
  });

  if (!newMovie) return res.status(401).send(`Unable to add the movie...!`);

  //return back the new data
  return res.status(200).send(newMovie);
});

route.get("/all-movies", async (req: Request, res: Response) => {
  const allMovies = await Movie.find();
  return res.status(200).send(allMovies);
});

route.get("/one-movies/:movieId", async (req: Request, res: Response) => {
  const movieId = req.params.movieId;

  try {
    const movieData = await Movie.findById(movieId);
    return res.status(200).send(movieData);
  } catch {
    return res
      .status(401)
      .send(`Can't get the movie with Id ${movieId} back...!`);
  }
});

route.patch(
  "/upload-movie/:movieId",
  upload.single("thumb"),
  async (req: Request, res: Response) => {
    const movieId = req.params.movieId;
    try {
      const movieData = await Movie.findById(movieId);
      let savedData = null;
      if (movieData) {
        movieData.thumb_url = req.thumb || "";
        savedData = await movieData.save();
      }
      return res.status(200).send(savedData);
    } catch {
      return res.status(401).send(`Can't find the movie with id ${movieId}`);
    }
  }
);

export default route;
