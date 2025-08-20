import app from './app';

//const port = process.env.PORT | 3000;
const port = 3000

Bun.serve({
  // port: port,  # either specify or is served thru port 3000 by default
  hostname: "0.0.0.0", // if we are running on WSL or docker(perhaps)
  // fetch(req) {
  //   return new Response("404!");
  // }
  fetch: app.fetch, // use the Hono app to handle requests
});

console.log(`API Server running on port ${port}`);
