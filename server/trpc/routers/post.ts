import { z } from "zod";
import { router, procedure } from "../trpc";
import { PrismaClient } from "@prisma/client/edge";

const prisma = new PrismaClient();

export const postRouter = router({
  getAll: procedure.query(async () => {
    return await prisma.post.findMany({
      include: { author: true },
    });
  }),

  getById: procedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    return await prisma.post.findUnique({
      where: { id: input },
      include: { author: true },
    });
  }),

  create: procedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().optional(),
        authorId: z.string(),
        published: z.boolean().default(false),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      return await prisma.post.create({
        data: input,
      });
    }),

  update: procedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().min(1).optional(),
        content: z.string().optional(),
        published: z.boolean().optional(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      const { id, ...data } = input;
      return await prisma.post.update({
        where: { id },
        data,
      });
    }),
});
