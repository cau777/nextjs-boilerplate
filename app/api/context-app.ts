

const handler = (req: Request): Promise<Response> => {
  // @ts-ignore
  return new Response(JSON.stringify({ hasContext: !!globalThis[Symbol.for('@vercel/request-context')]?.get() }), { status: 200, statusText: 'OK' })
}

export { handler as GET, handler as POST }
