export interface EventModel {
  id?: number;
  itemMovie?: MovieModel;
  value: string;
  number: number;
};

export interface MovieModel {
  id: number;
  title: string;
  posterUrl: string;
  stars: number;
  likes: number;
  genres: string;
  actor: string[];
  director: string[];
  direcription: string;
};
