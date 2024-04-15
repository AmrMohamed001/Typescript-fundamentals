# TypeScript Map Project

This project aims to create an interactive map application using TypeScript. The application will display markers for random users and companies on the map.

## Objective

The main objective of this project is to demonstrate TypeScript's capabilities in building web applications, particularly in creating dynamic and interactive maps. By utilizing TypeScript, we can leverage its strong typing system and object-oriented features to create reusable and maintainable code.

## Features

- User Class: The `User` class represents a user entity with properties such as name and location. Each user is assigned a random location on the map.

- Company Class: The `Company` class represents a company entity with properties like company name and catchphrase. Similar to users, companies are also randomly positioned on the map.

- CustomMap Interface: The `Mappable` interface ensures that both the `User` and `Company` classes implement the required methods for displaying markers on the map. This interface enforces consistency and helps in organizing the code.

- Marker Display: The application will display markers for users and companies on the map. Each marker will have a popup containing relevant information about the user or company, making it easy for users to identify and interact with them.

## Usage

To run the project, execute the following command in the terminal:

`npx parcel index.html`

This will start a development server and open the application in your default web browser. You can then interact with the map to view the markers for users and companies.

## Technologies Used

- TypeScript: Provides type safety and object-oriented features for building the application.
- Faker.js: Used to generate random data for users and companies.
- CustomMap library: A custom library for handling map-related functionalities.

## Future Enhancements

- Add more features such as search functionality and clustering for a better user experience.
- Improve the styling and user interface of the application.
- Integrate with external APIs to fetch real-time data for users and companies.

## Contributions

Contributions to the project are welcome! Feel free to fork the repository, make changes, and submit a pull request with your improvements.
