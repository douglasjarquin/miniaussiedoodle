// curl -X POST "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/c1c18ae8-4e24-42c8-9f5f-e56d83ac9f65"
interface Context {
  env: {
    CLOUDFLARE_HOOK_ID: string
  }
}

async function triggerCloudflareDeployHook(hookId: string) {
  let url = `https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/${hookId}`
  let payload = {
    method: "POST"
  }
  let response = await fetch(url, payload)
  return response
}

export async function onRequestGet(context: Context) {
  await triggerCloudflareDeployHook(context.env.CLOUDFLARE_HOOK_ID)
  // The airtable webhook api requires an empty response body
  // https://airtable.com/developers/web/api/webhooks-overview#webhook-notification-delivery
  return new Response("", { status: 200 });
}
