
# Lord of the Rings SDK Design

The Lord of the Rings SDK provides a convenient interface for developers to consume information about the trilogy from the Lord of the Rings API. It allows users to retrieve movie details and quotes easily.

## SDK Architecture

The SDK is designed as a wrapper around the Lord of the Rings API, providing a simplified and intuitive interface for developers. It consists of the following components:

-   `MovieAPI`: Handles API requests related to movies.
-   `QuoteAPI`: Handles API requests related to quotes.
-   `LordOfTheRingsSDK`: Main SDK class that serves as a high-level interface for developers to interact with the API.

## Installation

The Lord of the Rings SDK can be installed using npm. Run the following command to install the SDK package:

`npm install lord-of-the-rings-sdk` 

## Usage

To use the Lord of the Rings SDK in your application, follow these steps:

1.  Import the necessary classes and types from the SDK:
    `import { LordOfTheRingsSDK, MovieAPIParams, QuoteAPIParams, Movie, Quote } from 'lord-of-the-rings-sdk';` 
    
2.  Create an instance of the `LordOfTheRingsSDK` class by providing your access token:
    `const sdk = new LordOfTheRingsSDK('your-access-token');` 
    
3.  Start making API requests using the SDK methods. Here are some examples:

    -   Get a list of movies:
        
        `const movies: Movie[] = await sdk.getMovies();` 
        
    -   Get a movie by ID:
        
        `const movie: Movie = await sdk.getMovieById('movie-id');` 
        
    -   Get quotes for a movie:
        
        `const quotes: string[] = await sdk.getMovieQuotes('movie-id');` 
        
    -   Get a list of quotes:
        
        `const quotes: Quote[] = await sdk.getQuotes();` 
        
    -   Get a quote by ID:
        
        `const quote: Quote = await sdk.getQuoteById('quote-id');` 
        
    -   Get movies with pagination, sorting, and filtering:
        
        `const params: MovieAPIParams = {
          limit: 10,
          page: 2,
          sort: 'name:asc',
          name: 'The Fellowship of the Ring',
        };`
        
        `const movies: Movie[] = await sdk.getMovies(params);` 
        
        You can provide appropriate values for pagination, sorting, and filtering options based on the API documentation.
        
4.  Handle the retrieved data according to your application's needs.
    
## Testing

Unit tests have been added to ensure the correctness and proper functioning of the SDK. The tests cover the various methods and scenarios of the SDK, including the pagination, sorting, and filtering options.

To run the tests, follow these steps:

1.  Install the dependencies:
    
    `npm install` 
    
2.  Run the tests:
    
    `npm test` 
    

The tests will execute and display the results in the console.