interface Response {
  status: number
  body: any
  headers: any
}

interface Context {
  request: Request
  env: {
    AIRTABLE_BASE_ID: string
    AIRTABLE_ACCESS_TOKEN: string
    REDIRECT_URL: string
  }
  waitUntil: (promise: Promise<any>) => void
}

async function saveSubscriber(fields: any, baseId: string, accessToken: string) {
  let url = `https://api.airtable.com/v0/${baseId}/Subscribers`
  let payload = {
    body: JSON.stringify(fields),
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "Authorization": `Bearer ${accessToken}`,
    },
  }
  let response = await fetch(url, payload)
  return response
}

export async function onRequestPost(context: Context) {

  let body = await context.request.formData();
  let {
    email,
  } = Object.fromEntries(body)
  
  let fields = {
    fields: {
      "Email": email,
    }
  };
  await saveSubscriber(fields, context.env.AIRTABLE_BASE_ID, context.env.AIRTABLE_ACCESS_TOKEN)
  // return new Response("Success", { status: 200 });
  return Response.redirect(context.env.REDIRECT_URL, 302)
}

export async function onRequestGet(context: Context) {
  return new Response("Method Not Allowed", { status: 405 });
}