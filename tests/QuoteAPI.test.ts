import { QuoteAPI } from "../src/QuoteAPI";

describe("QuoteAPI", () => {
  const token = "duZhvX3XdRI1X0ocDLk7"; // Replace with the actual API URL
  const quoteAPI = new QuoteAPI(token);

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
});
