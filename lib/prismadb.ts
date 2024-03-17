import { PrismaClient } from '@prisma/client';

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV !== 'production') global.prismadb = client;

export default client;

// import { PrismaClient } from '@prisma/client';

// let client: PrismaClient;

// if (process.env.NODE_ENV === 'production') {
//   client = new PrismaClient();
// } else {
//   let globalWithPrisma = global as typeof globalThis & {
//     prisma: PrismaClient;
//   };
//   if (!globalWithPrisma.prisma) {
//     globalWithPrisma.prisma = new PrismaClient();
//   }
//   client = globalWithPrisma.prisma;
// }

// export default client;
