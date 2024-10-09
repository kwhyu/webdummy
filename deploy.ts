// deploy.ts
import { serve } from "https://deno.land/std@0.152.0/http/server.ts";

const port = parseInt(Deno.env.get("PORT") || "8000", 10);
const server = serve({ port });
console.log(`Server berjalan di http://localhost:${port}`);

for await (const req of server) {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    const html = await Deno.readTextFile("index.html");
    req.respond({ body: html, headers: new Headers({ "content-type": "text/html; charset=utf-8" }) });
  } else {
    req.respond({ status: 404, body: "404 Not Found" });
  }
}
