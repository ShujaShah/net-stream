// import { PrismaClient } from '@prisma/client';

// const client = global.prismadb || new PrismaClient();
// if (process.env.NODE_ENV === 'production') global.prismadb = client;

// export default client;

import { PrismaClient } from '@prisma/client';

declare global {
  var prismadb: PrismaClient; // This must be a `var` and not a `let / const`
}

let client: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prismadb = new PrismaClient();
} else {
  if (!global.prismadb) {
    global.prismadb = new PrismaClient();
  }
  prismadb = global.prismadb;
}

export default client;