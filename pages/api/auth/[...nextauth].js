import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  secret: "AS2UmJKh0Hm2CfPbAsPgNI2UfPwbhybMhaI9gwbmMwA=",
  jwt: {
      signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  }, 
  database: process.env.DATABASE_URL,
  adapter: PrismaAdapter(prisma)
})

