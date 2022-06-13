import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res){
    try{
    const {name, email, bio} = req.body;
        await prisma.user.update({
            where: {
              email: email,
            },
            data: {
              name: name,
              bio: bio
            },
          })
        res.send(200)
    }
    catch(err){
        res.send(400)
    }
}