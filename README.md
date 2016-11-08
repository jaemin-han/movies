
# EDIT THE SEED FILE
- Change all instances where you find the following comment `-- UPDATE THIS PATH WITH YOUR OWN!`
- Update it with your own ABSOLUTE path to the `migration.sql` file

# Steps to seed database (ORDER IS IMPORTANT)
1. `dropdb allthemovies`
2. `createdb allthemovies`
3. `psql -d allthemovies -f ./db/migration.sql`

# dotenv
1. create a `.env` file at the root of your project
2. add the following info (**UPDATE** `USER=` with your username):
  > DB_HOST=localhost
    DB_USER=<your database username>
    DB_PASS=
    DB_NAME=allthemovies
    DB_PORT=5432
    NODE_ENV=development

# npm
1. in the terminal type: `npm install` (from the root of your project)

# helpful commands
`\du` to see all users (inside psql)





<!-- 
function updateMovie(req, res, next) {
 db.none(`UPDATE movies
  SET title=$2,
      release_date=$3,
      video_release_date=$4,
      imdb_url=$5,
      gen_unknown=$6,
      gen_action=$7,
      gen_adventure=$8,
      gen_animation=$9,
      gen_children=$10,
      gen_comedy=$11,
      gen_crime=$12,
      gen_documentary=$13,
      gen_drama=$14,
      gen_fantasy=$15,
      gen_film_noir=$16,
      gen_horror=$17,
      gen_musical=$18,
      gen_mystery=$19,
      gen_romance=$20,
      gen_scifi=$21,
      gen_thriller=$22,
      gen_war=$23,
      gen_western=$24
      WHERE id=$1
  `),
  [Number.parseInt(req.body.id),
    req.body.title,
    req.body.release_date,
    req.body.video_release_date,
    req.body.imdb_url,
    req.body.gen_unknown,
    req.body.gen_action,
    req.body.gen_adventure,
    req.body.gen_animation,
    req.body.gen_children,
    req.body.gen_comedy,
    req.body.gen_crime,
    req.body.gen_documentary,
    req.body.gen_drama,
    req.body.gen_fantasy,
    req.body.gen_film_noir,
    req.body.gen_horror,
    req.body.gen_musical,
    req.body.gen_mystery,
    req.body.gen_romance,
    req.body.gen_scifi,
    req.body.gen_thriller,
    req.body.gen_war,
    req.body.gen_western
    ]
  .then((data) => {
    res.rows = data;
    next();
  })
  .catch(error => {
    next(error)
  })
// implement update
} -->
