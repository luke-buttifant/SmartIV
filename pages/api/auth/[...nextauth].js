import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import EmailTemplate from './email_template'


const prisma = new PrismaClient()

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
    EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
          }
        },
        from: process.env.EMAIL_FROM,
        sendVerificationRequest({
          identifier: email,
          url,
          provider: { server, from },
        }) {EmailTemplate(url, email, server, from)},
      })
  ],
  pages: {
      signIn: "/auth/signin",
      verifyRequest: '/auth/verify-request'
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
      signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  }, 
  callbacks: {
    async session({session, token, user}){
    session.user.bio = user.bio
    session.user.interviews_practised = user.interviews_practised
    return session
    }
  },
  database: process.env.DATABASE_URL,
  adapter: PrismaAdapter(prisma)
})

