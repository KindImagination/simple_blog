import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const method = getMethod(event);

  try {
    if (method === "GET") {
      const posts = await prisma.post.findMany({
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return { posts };
    }

    if (method === "POST") {
      const body = await readBody(event);

      if (!body.title) {
        return {
          error: "Title is required",
        };
      }

      if (!body.authorId) {
        return {
          error: "Author is required",
        };
      }

      const author = await prisma.user.findUnique({
        where: { id: body.authorId },
      });

      if (!author) {
        return {
          error: "Author not found",
        };
      }

      const newPost = await prisma.post.create({
        data: {
          title: body.title,
          content: body.content || null,
          published: body.published || false,
          authorId: body.authorId,
        },
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });

      return { post: newPost };
    }

    return {
      error: `Method ${method} not supported`,
    };
  } catch (error: any) {
    console.error("Prisma posts error:", error);

    return {
      error: error.message || "An error occurred while processing your request",
    };
  }
});
