import { Prisma, PrismaClient } from '@prisma/client/extension'

const prisma = new PrismaClient().$extends({
  name: '@lanterndata/prisma',
  query: {
    $allModels: {
      orderBy({ model, operation, args, query }) {
        if
        return prisma.$queryRaw`${} <-> ${args._distance} DESC`
      }
    }
  }
})


// export const userEmbeddingExtension = queryEngine.extend({
//   orderBy: {
//     user_embedding: {
//       distance: (queryArgs) => {
//         return Prisma.sql`embedding <-> ${queryArgs.distance}`
//       }
//     }
//   }
// })
