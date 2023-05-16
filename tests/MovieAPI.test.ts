import { MovieAPIParams } from "../src";
import { MovieAPI } from "../src/MovieAPI";

describe("MovieAPI", () => {
  const token = 'duZhvX3XdRI1X0ocDLk7'
  const movieAPI = new MovieAPI(token);

  const mockParams: MovieAPIParams = {
    offset: 1,
    page:2,
    sort: 'name:asc',
  }

  it("should fetch a movie by ID", async () => {
    const movieId = "5cd95395de30eff6ebccde5d";
    const movie = await movieAPI.getMovieById(movieId );
    expect(movie.docs).toHaveLength(1);
    expect(movie.offset).toBe(0);
    expect(movie.page).toBe(1);
    expect(movie.pages).toBe(1);

    expect(movie.docs[0]._id).toBe(movieId);
    expect(movie.docs[0].name).toBeDefined();
    expect(movie.docs[0].runtimeInMinutes).toBeDefined();
    expect(movie.docs[0].budgetInMillions).toBeDefined();
    expect(movie.docs[0].boxOfficeRevenueInMillions).toBeDefined();
    expect(movie.docs[0].academyAwardNominations).toBeDefined();
    expect(movie.docs[0].academyAwardWins).toBeDefined();
    expect(movie.docs[0].rottenTomatoesScore).toBeDefined();
  });

  it("should fetch list of movies", async () => {
    const movies = await movieAPI.getMovies();
    expect(movies.docs.length).toBeGreaterThan(0);
    expect(movies.offset).toBe(0);
    expect(movies.page).toBe(1);
    expect(movies.pages).toBe(1);
  });

  it("should fetch movie quotes", async () => {
    const movieId = "5cd95395de30eff6ebccde5d";
    const movieQuotes = await movieAPI.getMovieQuotes(movieId);

    expect(movieQuotes.docs.length).toBeGreaterThan(0);
    expect(movieQuotes.offset).toBe(0);
    expect(movieQuotes.page).toBe(1);
    expect(movieQuotes.pages).toBeGreaterThan(0);
  });

  it("should fetch movies based on query params",async  () => {
    const movies = await movieAPI.getMovies(mockParams);
  });

});
