select "genres"."name" as "genre",
       count("films".*) as "numberOfmovie"
  from "actors"
  join "castMembers" using ("actorId")
  join "films" using ("filmId")
  join "filmGenre"  using ("filmId")
  join "genres"  using ("genreId")
  where "actors"."firstName" = 'Lisa'
    and "actors"."lastName" = 'Monroe'
  group by "genres"."name";
