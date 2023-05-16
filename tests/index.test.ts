import {
  LordOfTheRingsSDK,
  Movie,
  Quote,
} from "../src/index";

// Mocked API responses
const mockMovies: Movie[] = [
  {
    _id: "5cd95395de30eff6ebccde5b",
    name: "The Two Towers ",
    runtimeInMinutes: 179,
    budgetInMillions: 94,
    boxOfficeRevenueInMillions: 926,
    academyAwardNominations: 6,
    academyAwardWins: 2,
    rottenTomatoesScore: 96,
  },
  {
    _id: "5cd95395de30eff6ebccde5c",
    name: "The Fellowship of the Ring",
    runtimeInMinutes: 178,
    budgetInMillions: 93,
    boxOfficeRevenueInMillions: 871.5,
    academyAwardNominations: 13,
    academyAwardWins: 4,
    rottenTomatoesScore: 91,
  },
  {
    _id: "5cd95395de30eff6ebccde5d",
    name: "The Return of the King",
    runtimeInMinutes: 201,
    budgetInMillions: 94,
    boxOfficeRevenueInMillions: 1120,
    academyAwardNominations: 11,
    academyAwardWins: 11,
    rottenTomatoesScore: 95,
  },
];

const mockQuotes: Quote[] = [
  {
    _id: "5cd96e05de30eff6ebccedfc",
    dialog: "Tomatoes, sausages, nice crispy bacon",
    movie: "5cd95395de30eff6ebccde5c",
    character: "5cd99d4bde30eff6ebccfc7c",
    id: "5cd96e05de30eff6ebccedfc",
  },
  {
    _id: "5cd96e05de30eff6ebcce99c",
    dialog: "Sam, no!",
    movie: "5cd95395de30eff6ebccde5d",
    character: "5cd99d4bde30eff6ebccfc15",
    id: "5cd96e05de30eff6ebcce99c",
  },
];

const mockMovieQuotes: Quote[] = [
  {
    _id: "5cd96e05de30eff6ebccedfc",
    dialog: "Tomatoes, sausages, nice crispy bacon",
    movie: "5cd95395de30eff6ebccde5d",
    character: "5cd99d4bde30eff6ebccfc7c",
    id: "5cd96e05de30eff6ebccedfc",
  },
  {
    _id: "5cd96e05de30eff6ebcce99c",
    dialog: "Sam, no!",
    movie: "5cd95395de30eff6ebccde5d",
    character: "5cd99d4bde30eff6ebccfc15",
    id: "5cd96e05de30eff6ebcce99c",
  },
];

// Mocked API methods
jest.mock("../src/MovieAPI", () => ({
  MovieAPI: jest.fn().mockImplementation(() => ({
    getMovies: jest.fn().mockResolvedValue({
      docs: mockMovies,
    }),
    getMovieById: jest.fn().mockResolvedValue({ docs: [mockMovies[0]] }),
    getMovieQuotes: jest.fn().mockResolvedValue({ docs: [mockMovieQuotes] }),
  })),
}));

jest.mock("../src/QuoteAPI", () => ({
  QuoteAPI: jest.fn().mockImplementation(() => ({
    getQuotes: jest.fn().mockResolvedValue({ docs: mockQuotes }),
    getQuoteById: jest.fn().mockResolvedValue({ docs: [mockQuotes[0]] }),
  })),
}));

describe("LordOfTheRingsSDK", () => {
  const accessToken = "your-access-token";

  it("should create an instance of LordOfTheRingsSDK", () => {
    const sdk = new LordOfTheRingsSDK(accessToken);
    expect(sdk).toBeInstanceOf(LordOfTheRingsSDK);
  });

  it("should get movies", async () => {
    const sdk = new LordOfTheRingsSDK(accessToken);
    const { docs: movies } = await sdk.getMovies();
    expect(movies).toEqual(mockMovies);
  });

  it("should get a movie by ID", async () => {
    const sdk = new LordOfTheRingsSDK(accessToken);
    const {
      docs: [movie],
    } = await sdk.getMovieById("movie-id");
    expect(movie).toEqual(mockMovies[0]);
  });

  it("should get movie quotes", async () => {
    const sdk = new LordOfTheRingsSDK(accessToken);
    const {
      docs: [movieQuotes],
    } = await sdk.getMovieQuotes("movie-id");
    expect(movieQuotes).toEqual(mockMovieQuotes);
  });

  it("should get quotes", async () => {
    const sdk = new LordOfTheRingsSDK(accessToken);
    const { docs: quotes } = await sdk.getQuotes();
    expect(quotes).toEqual(mockQuotes);
  });

  it("should get a quote by ID", async () => {
    const sdk = new LordOfTheRingsSDK(accessToken);
    const {
      docs: [quote],
    } = await sdk.getQuoteById("quote-id");
    expect(quote).toEqual(mockQuotes[0]);
  });

  // Add more tests as needed for different scenarios
});
