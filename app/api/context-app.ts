import {getContext} from "@vercel/functions/get-context";


const handler = (): Response => {
  return new Response(JSON.stringify({ hasContext: !!getContext()?.waitUntil }), { status: 200, statusText: 'OK' })
}

export { handler as GET, handler as POST }
