import type {NextApiRequest, NextApiResponse} from "next";
import {waitUntil} from "@vercel/functions";

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse
) {
  waitUntil((async () => {
    await fetch('https://webhook.site/b740b2f7-8f55-43f6-82df-eb40c007ee4e', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: "Ok 1" })
    await fetch('https://webhook.site/b740b2f7-8f55-43f6-82df-eb40c007ee4e', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: "Ok 2" })
    await fetch('https://webhook.site/b740b2f7-8f55-43f6-82df-eb40c007ee4e', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: "Ok 3" })
  })())

  res.status(200).json({ })
}
