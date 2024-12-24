import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  hasContext: boolean
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ hasContext: !!globalThis[Symbol.for('@vercel/request-context')]?.get() })
}
