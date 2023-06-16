

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const data = [
  { id: 1, title: 'The Shawshank Redemption', year: 1994 },
  { id: 2, title: 'The Godfather', year: 1972 },
  { id: 3, title: 'The Godfather: Part II', year: 1974 },
  { id: 4, title: 'The Dark Knight', year: 2008 },
  { id: 5, title: '12 Angry Men', year: 1957 },
  { id: 6, title: "Schindler's List", year: 1993 },
  { id: 7, title: 'Pulp Fiction', year: 1994 },
  { id: 8, title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { id: 9, title: 'The Good, the Bad and the Ugly', year: 1966 },
  { id: 10, title: 'Fight Club', year: 1999 },
  { id: 11, title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { id: 12, title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { id: 13, title: 'Forrest Gump', year: 1994 },
  { id: 14, title: 'Inception', year: 2010 },
  { id: 15, title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { id: 16, title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { id: 17, title: 'Goodfellas', year: 1990 },
  { id: 18, title: 'The Matrix', year: 1999 },
  { id: 19, title: 'Seven Samurai', year: 1954 },
  { id: 20, title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { id: 21, title: 'City of God', year: 2002 },
  { id: 22, title: 'Se7en', year: 1995 },
  { id: 23, title: 'The Silence of the Lambs', year: 1991 },
  { id: 24, title: "It's a Wonderful Life", year: 1946 },
  { id: 25, title: 'Life Is Beautiful', year: 1997 },
  { id: 26, title: 'The Usual Suspects', year: 1995 },
  { id: 27, title: 'Léon: The Professional', year: 1994 },
  { id: 28, title: 'Spirited Away', year: 2001 },
  { id: 29, title: 'Saving Private Ryan', year: 1998 },
  { id: 30, title: 'Once Upon a Time in the West', year: 1968 },
  { id: 31, title: 'American History X', year: 1998 },
  { id: 32, title: 'Interstellar', year: 2014 },
  { id: 33, title: 'Casablanca', year: 1942 },
  { id: 34, title: 'City Lights', year: 1931 },
  { id: 35, title: 'Psycho', year: 1960 },
  { id: 36, title: 'The Green Mile', year: 1999 },
 
];

export default data;

// { id: 38, title: 'Modern Times', year: 1936 },
// { id: 39, title: 'Raiders of the Lost Ark', year: 1981 },
// { id: 40, title: 'Rear Window', year: 1954 },
// { id: 41, title: 'The Pianist', year: 2002 },
// { id: 42, title: 'The Departed', year: 2006 },
// { id: 43, title: 'Terminator 2: Judgment Day', year: 1991 },
// { id: 44, title: 'Back to the Future', year: 1985 },
// { id: 45, title: 'Whiplash', year: 2014 },
// { id: 46, title: 'Gladiator', year: 2000 },
// { id: 47, title: 'Memento', year: 2000 },
// { id: 48, title: 'The Prestige', year: 2006 },
// { id: 49, title: 'The Lion King', year: 1994 },
// { id: 50, title: 'Apocalypse Now', year: 1979 },
// { id: 51, title: 'Alien', year: 1979 },
// { id: 52, title: 'Sunset Boulevard', year: 1950 },
// { id: 53, title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
// { id: 54, title: 'The Great Dictator', year: 1940 },
// { id: 55, title: 'Cinema Paradiso', year: 1988 },
// { id: 56, title: 'The Lives of Others', year: 2006 },
// { id: 57, title: 'Grave of the Fireflies', year: 1988 },
// { id: 58, title: 'Paths of Glory', year: 1957 },
// { id: 59, title: 'Django Unchained', year: 2012 },
// { id: 60, title: 'The Shining', year: 1980 },
// { id: 61, title: 'WALL·E', year: 2008 },
// { id: 62, title: 'American Beauty', year: 1999 },
// { id: 63, title: 'The Dark Knight Rises', year: 2012 },
// { id: 64, title: 'Princess Mononoke', year: 1997 },
// { id: 65, title: 'Aliens', year: 1986 },
// { id: 66, title: 'Oldboy', year: 2003 },
// { id: 67, title: 'Once Upon a Time in America', year: 1984 },
// { id: 68, title: 'Witness for the Prosecution', year: 1957 },
// { id: 69, title: 'Das Boot', year: 1981 },
// { id: 70, title: 'Citizen Kane', year: 1941 },
// { id: 71, title: 'North by Northwest', year: 1959 },
// { id: 72, title: 'Vertigo', year: 1958 },
// { id: 73, title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
// { id: 74, title: 'Reservoir Dogs', year: 1992 },
// { id: 75, title: 'Braveheart', year: 1995 },
// { id: 76, title: 'M', year: 1931 },
// { id: 77, title: 'Requiem for a Dream', year: 2000 },
// { id: 78, title: 'Amélie', year: 2001 },
// { id: 79, title: 'A Clockwork Orange', year: 1971 },
// { id: 80, title: 'Like Stars on Earth', year: 2007 },
// { id: 81, title: 'Taxi Driver', year: 1976 },
// { id: 82, title: 'Lawrence of Arabia', year: 1962 },
// { id: 83, title: 'Double Indemnity', year: 1944 },
// { id: 84, title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
// { id: 85, title: 'Amadeus', year: 1984 },
// { id: 86, title: 'To Kill a Mockingbird', year: 1962 },
// { id: 87, title: 'Toy Story 3', year: 2010 },
// { id: 88, title: 'Logan', year: 2017 },
// { id: 89, title: 'Full Metal Jacket', year: 1987 },
// { id: 90, title: 'Dangal', year: 2016 },
// { id: 91, title: 'The Sting', year: 1973 },
// { id: 92, title: '2001: A Space Odyssey', year: 1968 },
// { id: 93, title: "Singin' in the Rain", year: 1952 },
// { id: 94, title: 'Toy Story', year: 1995 },
// { id: 95, title: 'Bicycle Thieves', year: 1948 },
// { id: 96, title: 'The Kid', year: 1921 },
// { id: 97, title: 'Inglourious Basterds', year: 2009 },
// { id: 98, title: 'Snatch', year: 2000 },
// { id: 99, title: '3 Idiots', year: 2009 },
// { id: 100, title: 'Monty Python and the Holy Grail', year: 1975 },