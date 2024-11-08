export function onRequest(context) {
  return new Response('<!DOCTYPE html > <html><body style="background-color: green" > </body></html >', { headers: { "Content-Type": "text/html" } });
}