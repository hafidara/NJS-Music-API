NestJS is a modern, scalable Node.js framework that facilitates the development of server-side applications. 
This is a music management API built using NestJS, which serves as a backend for managing artists, songs, and playlists. PostgreSQL was used as the database to store data about each entity. Docker was used as well to easily  set up and manage the database environment.

The API is structured using modules, each representing a specific domain(Artists, Songs, Playlists). Each module contains controllers that handle incoming requests and services that contain the business logic. NestJS’s built-in dependency injection system simplifies the management of services within controllers.

The API supports full Create, Read, Update, and Delete (CRUD) operations for artists, songs, and playlists.
Users can add new artists, retrieve a list of all artists or a specific artist by ID, update artist details, and delete artists.
Users can perform similar operations for songs, including linking songs to specific playlists.
Users can create playlists, view all playlists, and manage the songs within them.

The API has been tested using Postman, ensuring that all CRUD operations function as expected. Responses are structured in a consistent format, and appropriate status codes are returned for different operations.
