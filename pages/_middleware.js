import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import { server } from "../config"

export async function middleware(req) {
  // return early if url isn't supposed to be protected
  if (!req.url.includes(`/user`)) {
    return NextResponse.next()
  }

  const session = await getToken({ req, secret: process.env.SECRET, raw: true })
  if (!session) return NextResponse.redirect(`${server}/api/auth/signin`)
  return NextResponse.next()
}