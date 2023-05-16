import { QuoteAPIParams } from "../src";
import { QuoteAPI } from "../src/QuoteAPI";

describe("QuoteAPI", () => {
  const token = "duZhvX3XdRI1X0ocDLk7"; // Replace with the actual API URL
  const quoteAPI = new QuoteAPI(token);

  const mockParams: QuoteAPIParams = {
    page: 2,
    limit: 5,
    sort: 'character:asc',
  }

  it("should fetch a quote by ID", async () => {
    const quoteId = "5cd96e05de30eff6ebcce7e9";
    const quote = await quoteAPI.getQuoteById(quoteId);
    expect(quote.docs).toHaveLength(1);
    expect(quote.offset).toBe(0);
    expect(quote.page).toBe(1);
    expect(quote.pages).toBe(1);

    expect(quote.docs[0].id).toBe(quoteId);
    expect(quote.docs[0].dialog).toBeDefined();
    expect(quote.docs[0].character).toBeDefined();
    expect(quote.docs[0].movie).toBeDefined();
  });

  it("should fetch list of quotes", async () => {
    const quotes = await quoteAPI.getQuotes();
    expect(quotes.docs.length).toBeGreaterThan(0);
    expect(quotes.offset).toBe(0);
    expect(quotes.page).toBe(1);
    expect(quotes.pages).toBeGreaterThan(1);
  });

  it("should fetch movies based on query params without offset", async  () => {
    const movies = await quoteAPI.getQuotes(mockParams);
    expect(movies.page).toBe(mockParams.page);
    expect(movies.pages).toBe(Math.round(movies.total / (mockParams.limit ?? 1)));
    expect(movies.limit).toBe(mockParams.limit);
  });

  it("should fetch movies based on query params with offset", async  () => {
    const mockOffset = 4;
    const movies = await quoteAPI.getQuotes({
      ...mockParams,
      offset: mockOffset,
    });
    expect(movies.limit).toBe(mockParams.limit);
    expect(movies.docs).toHaveLength(Math.min(movies.total - mockOffset, (mockParams.limit ?? 1)));
  });

  it("should return empy docs when limit is 0", async () => {
    const movies = await quoteAPI.getQuotes({ limit: 0 });
    expect(movies.docs).toHaveLength(0);
  });
});
