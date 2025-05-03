import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const url = 'https://apifutbolista-ko6ygtybmq-wn.a.run.app/equipo?futbolista="+futbolista?' +
              new URL(request.url).searchParams.toString();
  const res = await fetch(url);
  const text = await res.text();
  return new Response(text, {
    status: res.status,
    headers: { 'Content-Type': 'text/plain' }
  });
}
