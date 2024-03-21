import { prisma } from '../server.js';

// Function to create a post
export async function createPost(postData) {
  const post = await prisma.post.create({ data: postData });

  return post;
}
// get post by id
export async function getPostById(postId) {
  const post = await prisma.post.findUnique({ where: { id: postId } });

  return post;
}
// get all posts
export async function getAllPosts() {
  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: {
          username: true,
        },
      },
    },
  });

  return posts;
}
// update post by id
export async function updatePostById(postId, postData) {
  const post = await prisma.post.update({
    where: { id: postId },
    data: postData,
  });

  return post;
}
// delete post by id
export async function deletePostById(postId) {
  const post = await prisma.post.delete({ where: { id: postId } });

  return post;
}

// get all posts by category
export async function getAllPostsByCategory() {
  const posts = await prisma.post.findMany({
    where: {
      category: {
        contains: category,
      },
    },
    include: {
      author: {
        select: {
          username: true,
        },
      },
    },
  });

  return posts;
}
