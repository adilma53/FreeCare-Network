import { prisma } from '../server.js';

// Function to create a user
export async function createUser(
  email,
  password,
  name = null,
  bio = null,
  occupation = null,
) {
  const userData = {
    email,
    password,
    ...(name !== null && name),
    ...(bio !== null && { bio }),
    ...(occupation !== null && { occupation }),
  };

  const user = await prisma.user.create({
    data: userData,
  });

  return user;
}

// Function to create a post for a user
export async function createPost(
  title,
  content,
  image = null,
  claimLimit = null,
  expiresAt = null,
  category,
  authorId,
) {
  const postData = {
    title,
    content,
    ...(image !== null && { image }),
    ...(claimLimit !== null && { claimLimit }),
    ...(expiresAt !== null && { expiresAt }),
    category,
    author: {
      connect: {
        id: authorId,
      },
    },
  };

  const post = await prisma.post.create({
    data: postData,
  });

  return post;
}

// Function to claim a post
export async function claimPost(postId, claimedById) {
  const claim = await prisma.claim.create({
    data: {
      post: {
        connect: {
          id: postId,
        },
      },
      claimedBy: {
        connect: {
          id: claimedById,
        },
      },
    },
  });

  return claim;
}
