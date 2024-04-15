## Premier League Results Parser (Typescript)

This project is a Typescript application designed to parse Premier League match data from a CSV file. It provides structure and organization to the data, making it easier to analyze and use for various purposes.

### Functionality

The application takes a CSV file containing Premier League match results as input. The expected format for each line in the CSV file is:

```
Date,Home Team,Away Team,Home Score,Away Score,Venue,Referee

```

Here's an example of a valid CSV file entry:

```
10/08/2018,Man United,Leicester,2,1,H,A Marriner

```

The application reads the CSV file line by line, extracts the data for each match, and parses it into a well-defined format. It creates two main data structures to represent the parsed information:

- Match: This interface defines the structure for a single match record. It includes properties for:
  - `date`: The date of the match (parsed as a Date object).
  - `homeTeam`: The name of the home team.
  - `awayTeam`: The name of the away team.
  - `homeScore`: The score of the home team.
  - `awayScore`: The score of the away team.
  - `venue`: The venue where the match took place (H for home, A for away).
  - `referee`: The name of the referee for the match.
- MatchData: This interface represents the entire collection of parsed matches. It holds an array of `Match` objects, providing a structured overview of all the matches in the CSV file.

### Benefits

By parsing the CSV data, this project offers several advantages:

- Improved Data Organization: The raw CSV data is transformed into a more manageable format, making it easier to work with and analyze.
- Structured Access: The `Match` interface provides well-defined properties for each match detail, allowing for clear and consistent access to specific information.
- Code Reusability: The parsed data can be easily integrated into other applications or scripts written in Typescript, promoting code reuse and reducing the need to handle raw CSV parsing logic.

### Usage

The project is designed to be user-friendly. Here's a basic outline of how to use it:

1.  Installation: Clone the project repository and install the required dependencies using npm.
2.  Data Preparation: Save your CSV file containing the match data in the project's root directory, following the expected format.
3.  Running the Script: Execute the provided script (e.g., `npm start`) to initiate the parsing process.
4.  Output: The parsed data, represented as an array of `Match` objects within a `MatchData` structure, is typically printed to the console. You can modify the script to write the data to a file or use it within your program.
