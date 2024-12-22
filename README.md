# Unhandled Promise Rejection in Express.js User Retrieval

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous database operations.  The example shows how improper error handling during user retrieval can lead to application crashes instead of graceful error responses.

## Bug

The `bug.js` file contains an Express.js route that fetches user data from a database.  If the database query fails, or if no user is found, the application throws an error, which is not properly handled, leading to a crash.  Specifically, missing error handling when accessing the database or when dealing with a non-existent user causes the application to crash. 

## Solution

The `bugSolution.js` file shows the corrected code with proper error handling.  It uses `try...catch` blocks and appropriate HTTP status codes to handle both database errors and cases where no user is found.  This ensures that the application remains stable and provides meaningful error responses to the client.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies (you'll likely need a mock database implementation). 
3. Run `node bug.js`. Observe the error and unexpected termination.
4. Run `node bugSolution.js`. Note that this version handles errors gracefully, providing appropriate HTTP status codes.