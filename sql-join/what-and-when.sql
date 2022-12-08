select "f"."releaseYear",
       "g"."name" as "genreName",
       "f"."title"
  from "filmGenre" as "fg"
  join "genres" as "g" using ("genreId")
  join "films" as "f" using ("filmId")
  where "title" = 'Boogie Amelie';
