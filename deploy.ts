// deploy.ts
import { serve } from "https://deno.land/std@0.152.0/http/server.ts";

const port = parseInt(Deno.env.get("PORT") || "8000", 10);

serve(async (req) => {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    try {
      const html = await Deno.readTextFile("index.html");
      return new Response(html, {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    } catch (error) {
      console.error("Error reading index.html:", error);
      return new Response("500 Internal Server Error", { status: 500 });
    }
  } else {
    return new Response("404 Not Found", { status: 404 });
  }
}, { port });

console.log(`Server berjalan di http://localhost:${port}`);
