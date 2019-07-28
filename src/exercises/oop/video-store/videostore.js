
class Video {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
    this.isRented = false;
  }

  get print() {
    return this.isRented ? `[${this.name}]` : this.name;
  }

  rent() {
    this.isRented = true;
  }

  return() {
    this.isRented = false;
  }
}

class VideoStore {
  constructor() {
    this.movies = [];
  }

  addMovie(name, rating) {
    this.movies.push(new Video(name, rating));
  }

  get printContent() {
    return this.movies.map(m => m.print).join(", ");
  }

  get asChoices() {
    return this.movies.map(movie => ({ name: movie.print, value: movie }));
  }

  rentMovies(movies) {
    for (const movie of movies) {
      movie.rent();
    }
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

exports.Video = Video;
exports.VideoStore = VideoStore;
exports.User = User;