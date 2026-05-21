import { createServer } from "node:http";
import { createApp, eventHandler, toNodeListener, fromNodeMiddleware, readRawBody } from "h3";
import sirv from "sirv";

const app = createApp();

// Serve static files from the client directory
// Important: single: false to avoid intercepting all requests with index.html
app.use(
  "/",
  fromNodeMiddleware(
    sirv("dist/client", {
      single: false,
      dev: false,
    }),
  ),
);

// Handle SSR requests
app.use(
  "/**",
  eventHandler(async (event) => {
    const { default: handler } = await import("./dist/server/server.js");

    const url = new URL(event.node.req.url || "/", `http://${event.node.req.headers.host}`);

    const method = event.node.req.method || "GET";
    const hasBody = !["GET", "HEAD"].includes(method);
    const body = hasBody ? await readRawBody(event, false) : undefined;

    const request = new Request(url, {
      method,
      headers: event.node.req.headers,
      body: body || undefined,
      // @ts-ignore
      duplex: body ? "half" : undefined,
    });

    return handler.fetch(request);
  }),
);

const port = process.env.PORT || 3000;
createServer(toNodeListener(app)).listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
