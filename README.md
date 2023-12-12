
npm trends shows nextjs is clear winner

https://npmtrends.com/@redwoodjs/core-vs-@remix-run/react-vs-gatsby-vs-next-vs-vike

# NextJS

https://nextjs.org/

### [aws-sample
* https://dev.to/alexvladut/how-to-add-aws-cdk-to-an-existing-project-2d30
* https://github.com/aws-samples/aws-lambda-nextjs/tree/main/nextjs-lambda-cdk

### [swagger docs](https://github.com/jellydn/next-swagger-doc)

Files of note:

* [Swagger and TS typing](models/user.ts)
* [API endpoint](pages/api/me.ts)
* [Telefunc handler](components/me-form.telefunc.ts)

swagger example:

https://github.com/jellydn/next-swagger-doc/blob/main/examples/next13-simple/pages/api/organization.tsx

start dev server: `npm run dev`

#### Page based routing

There's not an equivilent of Rails routes.rb, instead urls are constructed from the path on disk.  That [can be overridden](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) if
needed, but it's the default.


#### deployed with SST

it builds on top of AWS CDK
https://docs.sst.dev/start/nextjs

is deployed to: [https://d2k44yiqocld87.cloudfront.net/me](https://d2k44yiqocld87.cloudfront.net/me)

### lambda timings

need to verify these further, they're just from chrome network console

cold start around 2.5sec for /me  this is the "waiting for server response" time

hot response times:
  * 220ms for /me which is rendered React and served as html
  * 30ms for /doc/api which is static
  * 150ms for telefunc call to update name in memory

#### urls
/me displays form to edit user info

/api/me returns json about user

/doc/api html openapi docs
/doc/api.json json openapi definition

#### like:
  * openapi library is nice

#### dislike:
  * api routes are catchall, i.e. can't make just  "GET" handler.  can probably work around this easily enough tho with a wrapper

#### unknowns:
  * not sure how well the api server will scale
