//add movie
interface Genre {
  name: string;
}

export interface AddMovieDto {
  title: string;
  description: string;
  genres: [Genre];
  duration: number; //in min
}
