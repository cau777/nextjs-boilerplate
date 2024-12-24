import {waitUntil} from "@vercel/functions";

export default function handler() {
  waitUntil((async () => {
    await fetch('https://webhook.site/b740b2f7-8f55-43f6-82df-eb40c007ee4e', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: "Error 1" })
    await fetch('https://webhook.site/b740b2f7-8f55-43f6-82df-eb40c007ee4e', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: "Error 2" })
    await fetch('https://webhook.site/b740b2f7-8f55-43f6-82df-eb40c007ee4e', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: "Error 3" })
  })())
  throw new Error("Test error")
}
