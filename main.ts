// main.ts
import { serve } from "https://deno.land/std@0.152.0/http/server.ts";

const server = serve({ port: 8000 });
console.log("Server berjalan di http://localhost:8000");

for await (const req of server) {
  const url = new URL(req.url);

  // Mengatur rute
  if (url.pathname === "/") {
    // Mengirimkan isi file HTML
    const html = await Deno.readTextFile("index.html");
    req.respond({ body: html, headers: new Headers({ "content-type": "text/html; charset=utf-8" }) });
  } else {
    // Menangani rute yang tidak dikenal
    req.respond({ status: 404, body: "404 Not Found" });
  }
}
