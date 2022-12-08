select "a"."line1",
       "ci"."name" as "cityName",
       "a"."district",
       "co"."name" as "countryName"
  from "addresses" as "a"
  join "cities" as "ci" using ("cityId")
  join "countries" as "co" using ("countryId");
