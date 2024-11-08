interface Context {
  env: {
    AIRTABLE_ACCESS_TOKEN: string
    AIRTABLE_BASE_ID: string
  }
}

async function getWebhooks(baseId: string, accessToken: string) {
  let url = `https://api.airtable.com/v0/bases/${baseId}/webhooks`
  let payload = {
    headers: {
      "Authorization": `Bearer ${accessToken}`
    },
  }
  let response = await fetch(url, payload)
  return response
}

async function refreshWebhook(webhookId: string, baseId: string, accessToken: string) {
  let url = `https://api.airtable.com/v0/bases/${baseId}/webhooks/${webhookId}/refresh`
  let payload = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
  }
  let response = await fetch(url, payload)
  return response
}

export async function onRequestGet(context: Context) {
  let webhooks = await getWebhooks(context.env.AIRTABLE_BASE_ID, context.env.AIRTABLE_ACCESS_TOKEN)
  let json = await webhooks.json()
  let ids = json.webhooks.map((webhook: any) => webhook.id)

  for (let id of ids) {
    // console.log(`Refreshing webhook ${id}`)
    await refreshWebhook(id, context.env.AIRTABLE_BASE_ID, context.env.AIRTABLE_ACCESS_TOKEN)
  }
  return new Response("Success!", { status: 200 });
}
