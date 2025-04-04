import { z } from "zod";
import { router, procedure } from "../trpc";
import { PrismaClient } from "@prisma/client/edge";

const prisma = new PrismaClient();

export const userRouter = router({
  getAll: procedure.query(async () => {
    return await prisma.user.findMany();
  }),
  getById: procedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    return await prisma.user.findUnique({
      where: { id: input },
    });
  }),
  create: procedure
    .input(z.object({ name: z.string().optional(), email: z.string().email() }))
    .mutation(async (opts) => {
      const { input } = opts;
      return await prisma.user.create({
        data: input,
      });
    }),
});
