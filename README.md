
npm trends shows nextjs is clear winner

https://npmtrends.com/@redwoodjs/core-vs-@remix-run/react-vs-gatsby-vs-next-vs-vike

# NextJS

https://nextjs.org/

### [swagger docs](https://github.com/jellydn/next-swagger-doc)

Files of note:

* [Swagger and TS typing](models/user.ts)
* [API endpoint](pages/api/me.ts)
* [Telefunc handler](pages/me/index.telefunc.ts)

swagger example:

https://github.com/jellydn/next-swagger-doc/blob/main/examples/next13-simple/pages/api/organization.tsx

start dev server: `npm run dev`

#### Page based routing

There's not an equivilent of Rails routes.rb, instead urls are constructed from the path on disk.  That [can be overridden](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) if
needed, but it's the default.



#### urls
/me displays json about user

/api/me returns json about user

/doc/api html openapi docs
/doc/api.json json openapi definition

#### like:
  * openapi library is nice

#### dislike:
  * api routes are catchall, i.e. can't make just  "GET" handler.  can probably work around this easily enough tho with a wrapper

#### unknowns:
  * not sure how well the api server will scale
