import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const method = getMethod(event);

  try {
    if (method === "GET") {
      const users = await prisma.user.findMany({
        include: {
          _count: {
            select: { posts: true },
          },
        },
      });

      return { users };
    }

    if (method === "POST") {
      const body = await readBody(event);

      if (!body.email) {
        return {
          error: "Email is required",
        };
      }

      const existingUser = await prisma.user.findUnique({
        where: { email: body.email },
      });

      if (existingUser) {
        return {
          error: "Email already in use",
        };
      }

      const newUser = await prisma.user.create({
        data: {
          email: body.email,
          name: body.name || null,
        },
      });

      return { user: newUser };
    }

    return {
      error: `Method ${method} not supported`,
    };
  } catch (error: any) {
    console.error("Prisma users error:", error);

    return {
      error: error.message || "An error occurred while processing your request",
    };
  }
});
