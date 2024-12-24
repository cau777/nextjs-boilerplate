import type { NextApiRequest, NextApiResponse } from 'next'
import {getContext} from "@vercel/functions/get-context";
 
type ResponseData = {
  hasContext: boolean
}
 
export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ hasContext: !!getContext()?.waitUntil })
}
