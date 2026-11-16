import openNextHandler from "./.open-next/worker.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // 1. Direct API & WebSocket Routing to 24/7 Render Cloud Backend
    const isApiOrSocket =
      pathname.startsWith("/api/") ||
      pathname === "/api" ||
      pathname.startsWith("/socket.io/") ||
      pathname === "/socket.io";

    if (isApiOrSocket) {
      const targetUrl = new URL(request.url);
      targetUrl.hostname = "api.oxonom.com";
      targetUrl.protocol = "https:";
      targetUrl.port = "";

      const headers = new Headers(request.headers);
      headers.set("Host", "api.oxonom.com");
      headers.set("X-Forwarded-Host", "pos.oxonom.com");
      headers.set("X-Forwarded-Proto", "https");

      try {
        if (request.headers.get("Upgrade") === "websocket") {
          return fetch(targetUrl.toString(), {
            headers: headers,
          });
        }

        const modifiedRequest = new Request(targetUrl.toString(), {
          method: request.method,
          headers: headers,
          body: request.body,
          redirect: "manual",
        });

        return await fetch(modifiedRequest);
      } catch (err) {
        return new Response("Oxonom API Gateway Error: " + err.message, { status: 502 });
      }
    }

    // 2. Oxonom POS Web Application Routing (Cloudflare Worker oxonompos-web)
    const isAppPath =
      pathname === "/app" ||
      pathname.startsWith("/app/");

    if (isAppPath) {
      try {
        if (env.APP_WORKER) {
          const response = await env.APP_WORKER.fetch(request);
          return response;
        }

        // Fallback if service binding is not attached
        const targetUrl = new URL(request.url);
        targetUrl.hostname = "oxonompos-web.mail-oxonom.workers.dev";
        targetUrl.protocol = "https:";
        targetUrl.port = "";

        const headers = new Headers(request.headers);
        headers.set("Host", "oxonompos-web.mail-oxonom.workers.dev");
        headers.set("X-Forwarded-Host", "pos.oxonom.com");
        headers.set("X-Forwarded-Proto", "https");

        const modifiedRequest = new Request(targetUrl.toString(), {
          method: request.method,
          headers: headers,
          body: request.body,
          redirect: "manual",
        });

        const response = await fetch(modifiedRequest);

        const location = response.headers.get("Location");
        if (location && [301, 302, 307, 308].includes(response.status)) {
          const newHeaders = new Headers(response.headers);
          newHeaders.set(
            "Location",
            location.replace("oxonompos-web.mail-oxonom.workers.dev", "pos.oxonom.com")
          );
          return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders,
          });
        }

        return response;
      } catch (err) {
        return new Response("Oxonom App Gateway Error: " + err.message, { status: 502 });
      }
    }

    // 3. Default: Oxonom POS Marketing / Landing Website
    return openNextHandler.fetch(request, env, ctx);
  },
};
